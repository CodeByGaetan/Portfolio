interface SkillTagProps {
  skill: string
}

export default function SkillTag({ skill }: SkillTagProps) {
  return (
    <span className="rounded-md border px-2.5 py-0.5 text-xs font-semibold">
      {skill}
    </span>
  )
}
