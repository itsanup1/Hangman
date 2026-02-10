export function HangmanDrawing() {
  return (
    <div className="relative flex flex-col w-[250px] m-auto mt-40">
      
      {/* Rope */}
      <div className="absolute top-0 right-[-124px] h-14 w-2 bg-black" />
      
      {/*Head*/}
      <div className="absolute rounded-full border-12 h-20 w-20 right-[-160px] top-14"/>
      
      {/*Torso*/}
      <div className="h-36 w-3 bg-black absolute right-[-124px] top-32 rounded"/>
      
      {/*Left Hand*/}
      <div className="absolute  h-26 rotate-128 w-3 bg-black -right-20 top-28 rounded" />
      
      {/*Right Hand*/}
      <div className="absolute  h-26 -rotate-128 w-3 bg-black -right-42 top-28 rounded" />
      
      {/*Left Leg*/}
      <div className="absolute  h-26 rotate-58 w-3 bg-black -right-20 top-60 rounded " />
      
      {/*Right Leg*/}
      <div className="absolute  h-26 -rotate-58 w-3 bg-black -right-42 top-60 rounded" />
      
      {/* Top Bar */}
      <div className="h-2 w-[250px] ml-[121px] bg-black" />

      {/* Vertical Pole */}
      <div className="h-[400px] w-2 bg-black mx-auto" />

      {/* Bottom Base */}
      <div className="h-2 w-[250px] bg-black" />

    </div>
  );
}