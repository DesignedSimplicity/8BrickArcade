using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace _8BrickArcade.Web.Models
{
    public class GalagaViewModel
    {
        private static List<GalagaModel> _characters;

        static GalagaViewModel()
        {
            _characters = new List<GalagaModel>();
            foreach (GalagaCharacter c in Enum.GetValues(typeof(GalagaCharacter)))
            {
                _characters.Add(new GalagaModel(c));
            }
        }

        public List<GalagaModel> Characters { get { return _characters; } }
        public GalagaModel GetCharacter(GalagaCharacter c) { return _characters.FirstOrDefault(x => x.Character == c); }

        public GalagaViewModel(GalagaCharacter? character = null) { SelectedCharacter = character; }

        public GalagaCharacter? SelectedCharacter { get; set; }
		public bool HasSelectedCharacter { get { return SelectedCharacter.HasValue; } }
        public string SelectedCharacterName { get { return (HasSelectedCharacter ? GetCharacter(SelectedCharacter.Value).Name : ""); } }
	}
}