import { ReactNode } from "react"

interface Props {
  children: ReactNode;
}

export default function Header({children}: Props) {
  return (
    <div className="w-full max-h-14 flex justify-between py-3 px-5 bg-slate-100 fixed">
      {children}
    </div>
  )
}
