const GridItem = ({ size }) => {

  let spanClassname = "col-span-1";

  if (size == 3) {
    spanClassname = "md:col-span-2 lg:col-span-3";
  } else if (size == 2) {
    spanClassname = "md:col-span-2";
  }

  return (
    <p className={`bg-amber-100 ${spanClassname}`}>Grid Item</p>
  )
}

export default GridItem