namespace dragon_cli
{
    public class CommandFactory
    {
        private readonly EndpointGenerator endpointGenerator;
        public CommandFactory()
        {
            this.endpointGenerator = new EndpointGenerator();
        }

        public void Execute(string option, string optionObject)
        {
            switch (option)
            {
                case "e":
                    this.endpointGenerator.Generate(optionObject);
                    break;
                default:
                    Console.WriteLine("Command Option is not supported");
                    break;
            }
        }
    }
}