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
      </main>
    </div>
  );
}
