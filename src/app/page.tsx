import Button from "@/ui/primitives/Button";

export default function Home() {
  return (
    <div>
      <main className="flex gap-4">
        <Button variant={'secondary'}>
          Hello world
        </Button>
        <Button>
          Hello world
        </Button>
        <Button variant={'tab'}>
          Tab
        </Button>
        <Button variant={'filter'}>
          Filter
        </Button>
        <Button variant={'toggle'}>
          toggle
        </Button>
        <Button variant={'clear'}>
          clear
        </Button>
      </main>
    </div>
  );
}
