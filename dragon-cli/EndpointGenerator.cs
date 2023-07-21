namespace dragon_cli
{
    internal class EndpointGenerator
    {
        private readonly string artefactsPath = Path.Combine(AppContext.BaseDirectory,"artefacts", "models");
        private readonly string toCreatePath = Path.Combine("src", "endpoints");

        private string[] endpointParts = new string[]
        {
            "service",
            "controller",
            "repository",
            "route"
        };

        public EndpointGenerator()
        {
        }

        internal void Generate(string name)
        {
            for (int i = 0; i < endpointParts.Length; i++)
            {
                var currentElement = name + "." + endpointParts[i] + ".js";

                string currentFile = "";
                try
                {
                   currentFile = File.ReadAllText(
                   Path.Combine(artefactsPath, endpointParts[i] + ".md")
                   )
                   .Replace("<name>", name);
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Cant read source artefact");
                    throw ex;
                }

                try
                {
                    if (!Directory.Exists(Path.Combine(System.IO.Directory.GetCurrentDirectory(), toCreatePath, name)))
                    {
                        Directory.CreateDirectory(Path.Combine(System.IO.Directory.GetCurrentDirectory(), toCreatePath, name));
                    }

                    File.WriteAllText(Path.Combine(System.IO.Directory.GetCurrentDirectory(), toCreatePath,name, currentElement), currentFile);
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Cant write file");
                    throw ex;
                }
                
            }
        }
    }
}