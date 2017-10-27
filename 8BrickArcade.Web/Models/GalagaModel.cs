using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace _8BrickArcade.Web.Models
{
    public enum GalagaCharacter
    {
        None = 0,
        Fighter = 1,
        Galaga = 2,
        Butterfly = 3,
        Bumblebee = 4,
        Bosconian = 5,
        Dragonfly = 6,
        Scorpion = 7,
        Galaxian = 8,
        Satellite = 9,
        Enterprise = 10,
    }

    public class GalagaModel
    {
        private static Dictionary<GalagaCharacter, string> _title;
        private static Dictionary<GalagaCharacter, string> _japanese;
        private static Dictionary<GalagaCharacter, string> _description;
        private static GalagaCharacter[] _charEnemy = { GalagaCharacter.Bumblebee, GalagaCharacter.Butterfly, GalagaCharacter.Galaga };
        private static GalagaCharacter[] _charSpecial = { GalagaCharacter.Scorpion, GalagaCharacter.Bosconian, GalagaCharacter.Galaxian };

        static GalagaModel()
        {
            _title = new Dictionary<GalagaCharacter, string>();
            _title.Add(GalagaCharacter.Galaga, "Boss Galaga");
            _title.Add(GalagaCharacter.Bosconian, "Bosconian Spy Ship");
            _title.Add(GalagaCharacter.Galaxian, "Galaxian Flagship");

            _japanese = new Dictionary<GalagaCharacter, string>();
            _japanese.Add(GalagaCharacter.Butterfly, "Goei");
            _japanese.Add(GalagaCharacter.Bumblebee, "Zaki");
            _japanese.Add(GalagaCharacter.Bosconian, "Midori");
            _japanese.Add(GalagaCharacter.Dragonfly, "Tonbo");
            _japanese.Add(GalagaCharacter.Scorpion, "Sasori");
            _japanese.Add(GalagaCharacter.Satellite, "Momiji");

            _description = new Dictionary<GalagaCharacter, string>();
        }

        public GalagaModel(GalagaCharacter character) { Character = character; }

        public GalagaCharacter Character { get; private set; }

        public int Id { get { return (int)Character; } }

        public string Name { get { return Character.ToString(); } }

        public string Title { get { return (_title.ContainsKey(Character) ? _title[Character] : ""); } }

        public string JapaneseName { get { return (_japanese.ContainsKey(Character) ? _japanese[Character] : ""); } }

        public string Description { get { return (_description.ContainsKey(Character) ? _description[Character] : ""); } }

        /// <summary>
        /// Character is figher
        /// </summary>
        public bool IsFighter { get { return Character == GalagaCharacter.Fighter; } }

        /// <summary>
        /// Character is main enemy type
        /// </summary>
        public bool IsEnemy { get { return _charEnemy.Contains(Character); } }

        /// <summary>
        /// Character requires two hits
        /// </summary>
        public bool IsDouble { get { return Character == GalagaCharacter.Galaga; } }

        /// <summary>
        /// Character is special enemy
        /// </summary>
        public bool IsSpecial { get { return _charSpecial.Contains(Character); } }

        /// <summary>
        /// Displayed as open and closed states
        /// </summary>
        public bool HasStates { get { return IsEnemy; } }

        /// <summary>
        /// Prototypes with 6 sided views
        /// </summary>
        public bool HasPrototype { get { return IsEnemy; } }

        /// <summary>
        /// Origional 2.5 dimensional baseplaces
        /// </summary>
        public bool HasFlatlander { get { return IsEnemy; } }

        /// <summary>
        /// Origional multiple top down versions
        /// </summary>
        public bool HasEvolution { get { return Character == GalagaCharacter.Fighter || IsEnemy; } }
    }
}