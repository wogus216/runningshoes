import re
import json
from pathlib import Path
from collections import defaultdict

# Brands to check
BRANDS = ['nike', 'adidas', 'asics', 'newbalance', 'hoka', 'brooks', 'saucony', 'on', 'mizuno', 'puma']

BASE_PATH = Path('/Users/kwonjaehyeon/Programming/sancho/runningshoes/src/lib/data')

def extract_used_in_shoes(tech_file_content):
    """Extract usedInShoes arrays from brand technology files"""
    technologies = {}
    
    # Pattern to match technology blocks
    tech_pattern = r'\{\s*id:\s*[\'"]([^\'"]+)[\'"].*?usedInShoes:\s*\[(.*?)\]'
    matches = re.findall(tech_pattern, tech_file_content, re.DOTALL)
    
    for tech_id, shoes_str in matches:
        # Extract shoe slugs from the array
        shoes = re.findall(r'[\'"]([^\'"]+)[\'"]', shoes_str)
        technologies[tech_id] = shoes
    
    return technologies

def extract_shoe_slugs_and_tech_mentions(shoe_file_content):
    """Extract shoe slugs and check for technology mentions in their data"""
    shoes = {}
    
    # Pattern to match shoe objects
    shoe_pattern = r'id:\s*[\'"]([^\'"]+)[\'"].*?(?=\s*\},\s*\{|\s*\}\s*\]\s*;\s*$)'
    shoe_matches = re.finditer(shoe_pattern, shoe_file_content, re.DOTALL)
    
    for match in shoe_matches:
        shoe_id = match.group(1)
        shoe_block = match.group(0)
        
        # Extract all text content that might mention technologies
        # Look in description, features, detailedSpecs, etc.
        shoes[shoe_id] = shoe_block.lower()
    
    return shoes

def check_tech_in_shoe_data(shoe_data, tech_id, tech_name):
    """Check if a technology is mentioned in shoe data"""
    # Common variations of technology names
    checks = [
        tech_id.lower(),
        tech_name.lower(),
        tech_id.replace('-', ' ').lower(),
        tech_name.replace(' ', '').lower(),
        tech_id.replace('-', '').lower()
    ]
    
    for check_str in checks:
        if check_str in shoe_data:
            return True
    return False

def main():
    errors = []
    missing = []
    invalid = []
    
    print("[OBJECTIVE] Verify accuracy of usedInShoes mappings across all 10 brands\\n")
    
    for brand in BRANDS:
        print(f"[STAGE:begin:{brand}_verification]")
        
        brand_file = BASE_PATH / 'brands' / f'{brand}.ts'
        shoe_file = BASE_PATH / 'shoes' / f'{brand}.ts'
        
        if not brand_file.exists() or not shoe_file.exists():
            print(f"  [LIMITATION] Missing files for {brand}")
            continue
        
        # Read files
        brand_content = brand_file.read_text()
        shoe_content = shoe_file.read_text()
        
        # Extract data
        technologies = extract_used_in_shoes(brand_content)
        shoes = extract_shoe_slugs_and_tech_mentions(shoe_content)
        
        print(f"  [DATA] {brand}: {len(technologies)} technologies, {len(shoes)} shoes")
        
        # Check each technology's usedInShoes
        for tech_id, used_shoes in technologies.items():
            # Extract tech name using simpler pattern
            name_pattern = f"id:\\s*['\"]"+re.escape(tech_id)+f"['\"].*?name:\\s*['\"](.*?)['\"]"
            name_match = re.search(name_pattern, brand_content, re.DOTALL)
            tech_name = name_match.group(1) if name_match else tech_id
            
            for shoe_slug in used_shoes:
                # Check if shoe exists
                if shoe_slug not in shoes:
                    invalid.append({
                        'brand': brand,
                        'tech_id': tech_id,
                        'tech_name': tech_name,
                        'shoe_slug': shoe_slug,
                        'issue': 'INVALID_SLUG'
                    })
                    continue
                
                # Check if shoe actually uses this tech
                shoe_data = shoes[shoe_slug]
                if not check_tech_in_shoe_data(shoe_data, tech_id, tech_name):
                    errors.append({
                        'brand': brand,
                        'tech_id': tech_id,
                        'tech_name': tech_name,
                        'shoe_slug': shoe_slug,
                        'issue': 'NOT_MENTIONED'
                    })
        
        print(f"[STAGE:status:success]")
        print(f"[STAGE:end:{brand}_verification]\\n")
    
    # Output results
    print("\\n=== VERIFICATION RESULTS ===\\n")
    
    if errors:
        print(f"[FINDING] Found {len(errors)} ERRORS: Shoes in usedInShoes that DON'T mention the tech\\n")
        for err in errors[:30]:  # Show first 30
            print(f"  ❌ {err['brand']}: tech '{err['tech_name']}' ({err['tech_id']}) → shoe '{err['shoe_slug']}'")
    else:
        print("[FINDING] No errors found - all usedInShoes entries mention their technologies\\n")
    
    if invalid:
        print(f"\\n[FINDING] Found {len(invalid)} INVALID slugs: Non-existent shoes referenced\\n")
        for inv in invalid[:30]:
            print(f"  ⚠️  {inv['brand']}: tech '{inv['tech_name']}' → invalid slug '{inv['shoe_slug']}'")
    else:
        print("[FINDING] No invalid slugs - all referenced shoes exist\\n")
    
    # Summary statistics
    total_tech_count = 0
    total_mappings = 0
    for brand in BRANDS:
        brand_file = BASE_PATH / 'brands' / f'{brand}.ts'
        if brand_file.exists():
            content = brand_file.read_text()
            techs = extract_used_in_shoes(content)
            total_tech_count += len(techs)
            for tech_id, shoes in techs.items():
                total_mappings += len(shoes)
    
    accuracy = ((total_mappings - len(errors) - len(invalid)) / total_mappings * 100) if total_mappings > 0 else 0
    
    print(f"\\n[STAT:total_technologies] {total_tech_count}")
    print(f"[STAT:total_mappings] {total_mappings}")
    print(f"[STAT:errors] {len(errors)}")
    print(f"[STAT:invalid] {len(invalid)}")
    print(f"[STAT:accuracy] {accuracy:.1f}%")
    
    print("\\n[LIMITATION] This analysis uses text pattern matching and may have false positives/negatives")
    print("[LIMITATION] Some technologies may be implied but not explicitly named in shoe data")

if __name__ == '__main__':
    main()
