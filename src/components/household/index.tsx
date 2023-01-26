import InformationIcon from "@/icons/information";
import CheckBox from "../checkbox";
import Input from "../input";
import RadioButton from "../radio";
import Select from "../select";
import Username from "../username";

export interface Member {
  id: string;
  covered?: boolean;
  firstName: string;
  lastName: string;
  insurance?: string;
  idNumber?: string;
  nickName: string;
}

export interface HouseholdProps {
  members: Member[];
  subscriberId?: string;
  updateMemberField: ({
    index,
    field,
    value,
  }: {
    index: number;
    field: keyof Member;
    value: any;
  }) => void;
  addNewMember: () => void;
  setSubscriberId: (id: string) => void;
}

const Options = [
  { label: "Primary", value: "primary" },
  { label: "Secondary", value: "secondary" },
];

const Household = ({
  members,
  subscriberId,
  updateMemberField,
  addNewMember,
  setSubscriberId,
}: HouseholdProps) => {
  return (
    <div className="h-fit flex flex-col">
      <table className="-mx-4">
        <caption className="text-base text-dark font-medium text-left px-4">
          Household
        </caption>
        <thead>
          <tr className="text-dark text-xs">
            <th className="inline-flex col-covered">
              <span className="mr-1">Covered</span>
              <div>
                <InformationIcon />
              </div>
            </th>
            <th className="col-name">Name</th>
            <th className="col-subscriber">Subscriber</th>
            <th className="col-insurance">Insurance</th>
            <th className="col-id">ID</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={member.id} className="mb-3 h-11">
              <td className="col-covered">
                <CheckBox
                  checked={member.covered}
                  onClick={() => {
                    updateMemberField({
                      index,
                      field: "covered",
                      value: !member.covered,
                    });
                  }}
                />
              </td>
              <td className="col-name">
                <Username {...member} index={index} />
              </td>
              <td className="col-subscriber">
                <RadioButton
                  checked={member.id === subscriberId}
                  onClick={() => {
                    setSubscriberId(member.id);
                  }}
                />
              </td>
              <td className="col-insurance">
                <Select
                  selected={member.insurance}
                  options={Options}
                  onSelect={(option) => {
                    updateMemberField({
                      index,
                      field: "insurance",
                      value: option,
                    });
                  }}
                />
              </td>
              <td className="col-id">
                <Input
                  placeholder="Ins. ID/SSN"
                  value={member.idNumber}
                  onChange={(e) => {
                    updateMemberField({
                      index,
                      field: "idNumber",
                      value: e.target.value,
                    });
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="ml-auto text-green text-xs" onClick={addNewMember}>
        +Add new member
      </button>
    </div>
  );
};

export default Household;
