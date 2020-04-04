class ExampleModel {
  userId: number;
  id: number;
  title: string;
  completed: boolean;

  constructor(input: ExampleModel) {
    this.userId = input.userId ?? 0;
    this.id = input.id ?? 0;
    this.title = input.title ?? '';
    this.completed = input.completed ?? false;
    return this;
  }
}

export default ExampleModel;
