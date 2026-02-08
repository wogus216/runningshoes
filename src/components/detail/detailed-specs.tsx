import { ClipboardList } from 'lucide-react';
import type { DetailedSpecs as DetailedSpecsType } from "@/types/shoe";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

type DetailedSpecsProps = {
  specs: DetailedSpecsType;
};

export function DetailedSpecs({ specs }: DetailedSpecsProps) {
  const specRows = [
    { label: "무게", value: specs.weight },
    { label: "스택 높이", value: specs.stackHeight },
    { label: "힐-토 드롭", value: specs.drop },
    { label: "미드솔", value: specs.midsole },
    { label: "플레이트", value: specs.plate },
    { label: "아웃솔", value: specs.outsole },
    { label: "어퍼", value: specs.upper },
    { label: "발볼 너비", value: specs.width },
    { label: "추천 주행거리", value: specs.durability },
    { label: "가격", value: specs.price },
    { label: "코스트-퍼-km", value: specs.costPerKm },
    { label: "발 형태 적합성", value: specs.footType },
    { label: "착지 패턴", value: specs.landingPattern },
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-black flex items-center gap-4">
        <ClipboardList className="h-8 w-8 text-stone-700" />
        상세 스펙
      </h2>

      <div className="overflow-hidden bg-white rounded-2xl shadow-md">
        <Table>
          <TableBody>
            {specRows.map((row, index) => (
              <TableRow key={row.label} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                <TableCell className="font-bold text-stone-700 w-1/3">
                  {row.label}
                </TableCell>
                <TableCell>{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
