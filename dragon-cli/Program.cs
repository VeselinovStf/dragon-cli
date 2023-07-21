namespace dragon_cli
{
    public class Program
    {
        static void Main(string[] args)
        {
            if (args.Length == 0)
            {
                Console.WriteLine("Please provide argumeters!");
                return;
            }

            // dragon-cli g(generate) e(endpoint) <name>
            if (args.Length < 3) 
            {
                Console.WriteLine("Please use: dragon-cli g e <name>");
                return;
            }

            var command = args[0];
            var option = args[1];
            var optionObject = args[2];

            var commandFactory = new CommandFactory();

            switch (command)
            {
                case "g":
                    commandFactory.Execute(option, optionObject);
                    break;
                default:
                    Console.WriteLine("Command is not supported");
                    break;
            }

            
        }
    }
}