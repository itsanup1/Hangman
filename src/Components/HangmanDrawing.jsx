export function HangmanDrawing() {
  return (
    <div className="relative flex flex-col w-[250px] m-auto mt-40">
      
      {/* Rope */}
      <div className="absolute top-0 right-[-124px] h-14 w-2 bg-black" />
      {/*Head*/}
      <div className="absolute rounded-full border-6 h-22 w-22 right-[-164px] top-14"/>
      {/*Torso*/}
      <div className="h-[160px] w-[6px] bg-black absolute right-[-124px] top-36"/>
      {/*Left Hand*/}
      <div className="absolute  h-24 rotate-58 w-[6px] bg-black -right-21 top-38" />
      {/*Right Hand*/}
      <div className="absolute  h-24 -rotate-58 w-[6px] bg-black -right-41 top-38" />
      {/*Left Leg*/}
      <div className="absolute  h-24 rotate-58 w-[6px] bg-black -right-21 top-70" />
      {/*Right Leg*/}
      <div className="absolute  h-24 -rotate-58 w-[6px] bg-black -right-41 top-70" />
      {/* Top Bar */}
      <div className="h-2 w-[250px] ml-[121px] bg-black" />

      {/* Vertical Pole */}
      <div className="h-[400px] w-2 bg-black mx-auto" />

      {/* Bottom Base */}
      <div className="h-2 w-[250px] bg-black" />

    </div>
  );
}