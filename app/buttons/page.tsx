import { Button } from "@/components/ui/button";

export default function Home() {
  return <div>
    <Button>Default</Button>
    <Button variant="primary">Primary</Button>
    <Button variant="primaryOutline">PrimaryOutline</Button>
    <Button variant="secondary">secondary</Button>
    <Button variant="secondaryOutline">secondaryOutline</Button>
    <Button variant="sidebar">sidebar</Button>
    <Button variant="sidebarOutline">sidebarOutline</Button>
    <Button variant="super">super</Button>
    <Button variant="superOutline">superOutline</Button>
    <Button variant="ghost">ghost</Button>
    <Button variant="danger">danger</Button>
    <Button variant="dangerOutline">dangerOutline</Button>
  </div>;
}
