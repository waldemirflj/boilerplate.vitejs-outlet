import { useParams } from "react-router-dom";

function Index() {
  const { id } = useParams();

  return (
    <>
      <div>
        <p>Page details {id}</p>
      </div>
    </>
  );
}

export default Index;
