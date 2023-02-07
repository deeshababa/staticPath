import { GetStaticPaths, GetStaticProps } from 'next'
import api from '../../src/services/api';
import { useRouter } from "next/router";

type User = {
  id: number;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: string;
  followers: string;
  following: string;
}

type Props = {
  data: User;
}

export default function User({ data }: Props) {
  const router=useRouter()
  const { id } = router.query
  return (
    <div>
      <h3>Hi</h3>
      {/* <img src={data?.avatar_url} alt="Avatar Github" width={200}/>
      <h1>{data?.name}</h1>
      <h2>{data?.bio}</h2>
      <span>Repositorios: {data?.public_repos} - Followers: {data?.followers} - Following: {data?.following}</span> */}
    </div>
  );
}

// export const getStaticPaths: GetStaticPaths = async (context) => {
//   return {
//     paths: [
//       {
//         params: {
//           id: 'alexandredev3'
//         }
//       },
//       {
//         params: {
//           id: 'facebook'
//         }
//       }
//     ],
//     fallback: false
//   }
// }

// export const getStaticProps: GetStaticProps = async (context) => {
//   const id = context.params?.id as string;

//   const response = await api.get(`/users/${id}`);

//   return {
//     props: {
//       id,
//       data: response.data,
//     }
//   }
// }