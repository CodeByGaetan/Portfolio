import { Techno } from "@/models/Techno"

interface TechnoTagProps {
  techno: Techno
}

export default function TechnoTag({ techno }: TechnoTagProps) {
  return (
    <span
      className="rounded-full border px-2.5 py-0.5 text-xs font-semibold"
      style={{
        backgroundColor: techno.color,
        color: techno.textColor,
      }}
    >
      {techno.name}
    </span>
  )
}
