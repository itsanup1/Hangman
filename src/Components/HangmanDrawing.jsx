export function HangmanDrawing() {
  return (
    <div className="relative flex flex-col w-[250px] m-auto mt-40">
      
      {/* Rope */}
      <div className="absolute top-0 right-[-124px] h-14 w-2 bg-black" />
      
      {/*Head*/}
      <div className="absolute rounded-full border-12 h-20 w-20 right-[-160px] top-14"/>
      
      {/*Torso*/}
      <div className="h-36 w-3 bg-black absolute right-[-124px] top-32 rounded-full"/>
      
      {/*Left Hand*/}
      <div className="absolute  h-26 rotate-128 w-3 bg-black -right-22 top-24 rounded-full" />
      
      {/*Right Hand*/}
      <div className="absolute  h-26 -rotate-128 w-3 bg-black -right-40 top-24 rounded-full" />
      
      {/*Left Leg*/}
      <div className="absolute  h-26 rotate-48 w-3 bg-black -right-22 top-62  rounded-full" />
      
      {/*Right Leg*/}
      <div className="absolute  h-26 -rotate-48 w-3 bg-black -right-40 top-62 rounded-full" />
      
      {/* Top Bar */}
      <div className="h-2 w-[250px] ml-[121px] bg-black" />

      {/* Vertical Pole */}
      <div className="h-[400px] w-2 bg-black mx-auto" />

      {/* Bottom Base */}
      <div className="h-2 w-[250px] bg-black" />

    </div>
  );
}