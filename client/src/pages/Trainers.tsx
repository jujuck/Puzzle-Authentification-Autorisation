import { useGetAllTrainersQuery } from "../generated/graphql-types";

function Trainers() {
  const { loading, error, data } = useGetAllTrainersQuery();

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading</p>;
  return (
    <main className="container">
      <h1 className="text-center">Découvrez tous nos formateurs</h1>
      <section className="row">
        {data?.getAllTrainers.map((trainee) => (
          <article className="col-3">
            <div className="card m-1 shadow-sm p-3 mb-5 bg-white rounded">
              <h2 className="text-center p-2">
                {trainee.lastname} - {trainee.firstname}
              </h2>
              <ul className="list-group list-group-flush m-2">
                <li className="list-group-item">Sexe: {trainee.sex}</li>
                <li className="list-group-item">Age: {trainee.age}</li>
                <li className="list-group-item">Ville: {trainee.city}</li>
                <li className="list-group-item">
                  Spécialité: {trainee.speciality}
                </li>
              </ul>
              <p></p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Trainers;
