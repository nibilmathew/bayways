import { poolPromise } from '../path/to/db';

export default function Home({ data }) {
  return (
    <div>
      <h1>Next.js MSSQL Example</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM domflights');
    const data = result.recordset;

    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        data: [],
      },
    };
  }
}
