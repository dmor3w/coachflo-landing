// Reusable animated background decoration for sections
export default function DecorativeBg({ variant = 'default' }: { variant?: 'default' | 'blue' | 'warm' }) {
  const orb1 =
    variant === 'blue'  ? 'bg-blue-400/20' :
    variant === 'warm'  ? 'bg-orange-300/20' :
                          'bg-violet-400/20'

  const orb2 =
    variant === 'blue'  ? 'bg-violet-400/15' :
    variant === 'warm'  ? 'bg-pink-300/15' :
                          'bg-blue-400/15'

  const orb3 =
    variant === 'blue'  ? 'bg-cyan-300/10' :
    variant === 'warm'  ? 'bg-rose-300/10' :
                          'bg-purple-300/12'

  return (
    <>
      <div className={`absolute -top-20 -right-20 w-96 h-96 ${orb1} rounded-full blur-[90px] orb-float pointer-events-none`} />
      <div className={`absolute -bottom-20 -left-20 w-80 h-80 ${orb2} rounded-full blur-[80px] orb-float-reverse pointer-events-none`} />
      <div className={`absolute top-1/3 left-1/4 w-64 h-64 ${orb3} rounded-full blur-[70px] orb-drift pointer-events-none`} />
      <div className={`absolute bottom-1/4 right-1/4 w-48 h-48 ${orb1} rounded-full blur-[60px] orb-float pointer-events-none opacity-70`} style={{ animationDelay: '3s' }} />
      <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />
    </>
  )
}
