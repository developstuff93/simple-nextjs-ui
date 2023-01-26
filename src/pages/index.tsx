import Head from "next/head";
import Household, { Member } from "@/components/household";
import { useState } from "react";
import { mockedMembers } from "@/utils/mock";

export default function Home() {
  const [members, setMembers] = useState(mockedMembers);
  const [subscriberId, setSubscriberId] = useState(mockedMembers[1].id);

  const addNewMember = () => {
    const newIndex = (members.length + 1).toString();
    const newMember: Member = {
      id: newIndex,
      covered: false,
      firstName: "Test",
      lastName: `User ${newIndex}`,
      insurance: "",
      idNumber: "",
      nickName: `test ${newIndex}`,
    };
    setMembers([...members, newMember]);
  };

  const updateMemberField = ({
    index,
    field,
    value,
  }: {
    index: number;
    field: string;
    value: any;
  }) => {
    const newMembers = [...members];
    newMembers[index] = {
      ...newMembers[index],
      [field]: value,
    };
    setMembers(newMembers);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white h-screen flex justify-center">
        <Household
          members={members}
          subscriberId={subscriberId}
          updateMemberField={updateMemberField}
          addNewMember={addNewMember}
          setSubscriberId={setSubscriberId}
        />
      </main>
    </>
  );
}
