import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export default function BlogFilter() {
  return (
    <Select defaultValue='recommended'>
      <SelectTrigger className='w-45'>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='recommended'>Recommended</SelectItem>
        <SelectItem value='latest'>Latest</SelectItem>
        <SelectItem value='popular'>Popular</SelectItem>
      </SelectContent>
    </Select>
  );
}
