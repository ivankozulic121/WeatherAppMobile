import { Input } from '@/components/ui/input';
 
type SearchFieldProps = {
  value: string;
  onChange: (e: any) => void;
};

export function SearchField({ value, onChange }: SearchFieldProps ) {
  return (
    <Input
    style={{backgroundColor: '#25253f'}}
    className="text-[#bfbecd] bg-[#red] w-full h-12 rounded-xl placeholder:text-white"
      keyboardType="email-address"
      textContentType="emailAddress"
      autoComplete="email"
      placeholder="Search for a place..."
      value={value}
      onChange={onChange}
    
    />
  );
}