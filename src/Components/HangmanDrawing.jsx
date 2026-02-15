export function HangmanDrawing({numberofGuesses}) {
  const HEAD = (
      <div className="absolute rounded-full border-12 h-20 w-20 right-[-160px] top-14"/>
  )
  const TORSO = (
      <div className="h-36 w-3 bg-black absolute right-[-124px] top-32 rounded-full"/>
      
  )
  
  const LEFT_HAND=(
      <div className="absolute  h-26 rotate-128 w-3 bg-black -right-22 top-24 rounded-full" />
      
  )
  const RIGHT_HAND = (
      <div className="absolute  h-26 -rotate-128 w-3 bg-black -right-40 top-24 rounded-full" />
      
  )
  const LEFT_LEG = (
      <div className="absolute  h-26 rotate-48 w-3 bg-black -right-22 top-62  rounded-full" />
      
  )
  const RIGHT_LEG = (
      <div className="absolute  h-26 -rotate-48 w-3 bg-black -right-40 top-62 rounded-full" />
      
  )
  
  const BodyParts = [HEAD,TORSO,LEFT_HAND,RIGHT_HAND,LEFT_LEG,RIGHT_LEG];
  
  return (
    <div className="relative flex flex-col w-[250px] m-auto mt-40">
      
      {/*Rope */}
      <div className="absolute top-0 right-[-124px] h-14 w-2 bg-black" />
      
      {BodyParts.slice(0,numberofGuesses)}
      
      {/* Top Bar */}
      <div className="h-2 w-[250px] ml-[121px] bg-black" />

      {/* Vertical Pole */}
      <div className="h-[400px] w-2 bg-black mx-auto" />

      {/* Bottom Base */}
      <div className="h-2 w-[250px] bg-black" />

    </div>
  );
}