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
    </div>
  );
}

