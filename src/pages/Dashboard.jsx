import GridItem from "../components/MainLayoutComponents/GridItem";

const Dashboard = () => {
  return (
    <div className="border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem size={3} />
    </div>
  )
}

export default Dashboard;