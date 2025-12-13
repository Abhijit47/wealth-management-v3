import { ThemeModeToggle } from '@/components/shared/theme-mode-toggler';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      <h1 className={'text-5xl font-bold'}>Hello</h1>
      <Button>Click me</Button>
      <ThemeModeToggle />
    </div>
  );
}
