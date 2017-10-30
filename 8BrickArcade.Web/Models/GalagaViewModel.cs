using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace _8BrickArcade.Web.Models
{
    public class GalagaCharacterJson
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Page { get; set; }
        public string Image { get; set; }
    }

    public enum RenderDirections
    {
        Top, Bottom, Front, Back, Left, Right
    }

    

    public enum GalageCharacterClass
    {
        Player = 0,
        Enemy = 1,
        Bonus = 2,
        Thrid = 3,
    }

    public enum GalagaCharacterJapanese
    {
        Goei = 3,
        Zako = 4,
        Midori = 5,
        Tonbo = 6,
        Sasori = 7,
        Galaxian = 8,
        Momiji = 9,
        Enterprise = 10,
    }

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


        public List<GalagaModel> ListMainCharacters()
        {
            var list = new List<GalagaModel>();
            list.Add(new GalagaModel(GalagaCharacter.Fighter));
            list.Add(new GalagaModel(GalagaCharacter.Galaga));
            list.Add(new GalagaModel(GalagaCharacter.Butterfly));
            list.Add(new GalagaModel(GalagaCharacter.Bumblebee));
            return list;
        }


        public GalagaViewModel(GalagaCharacter? character = null) { SelectedCharacter = character.HasValue ? character.Value : GalagaCharacter.None; }

        public GalagaCharacter SelectedCharacter { get; set; }
        public bool HasSelectedCharacter { get { return SelectedCharacter != GalagaCharacter.None; } }
        public bool IsMainCharacter { get { return MainCharacters.Contains(SelectedCharacter); } }
        public bool HasCube { get { return CubeCharacters.Contains(SelectedCharacter); } }
        public string SelectedCharacterName { get { return GalagaViewModel.GetCharacterName(SelectedCharacter); } }

        public List<GalagaCharacter> MainCharacters
        {
            get
            {
                var list = new List<GalagaCharacter>();
                list.Add(GalagaCharacter.Fighter);
                list.Add(GalagaCharacter.Galaga);
                list.Add(GalagaCharacter.Butterfly);
                list.Add(GalagaCharacter.Bumblebee);
                return list;
            }
        }

        public List<GalagaCharacter> CubeCharacters
        {
            get
            {
                var list = new List<GalagaCharacter>();
                list.Add(GalagaCharacter.Fighter);
                list.Add(GalagaCharacter.Galaga);
                list.Add(GalagaCharacter.Butterfly);
                list.Add(GalagaCharacter.Bumblebee);
                return list;
            }
        }

        public List<GalagaCharacter> AllCharacters
        {
            get
            {
                var list = new List<GalagaCharacter>();
                list.Add(GalagaCharacter.Fighter);
                list.Add(GalagaCharacter.Galaga);
                list.Add(GalagaCharacter.Butterfly);
                list.Add(GalagaCharacter.Bumblebee);
                list.Add(GalagaCharacter.Scorpion);
                list.Add(GalagaCharacter.Bosconian);
                list.Add(GalagaCharacter.Galaxian);
                list.Add(GalagaCharacter.Dragonfly);
                return list;
            }
        }

        public List<GalagaCharacterJson> GetCharacterData()
        {
            var all = new List<GalagaCharacterJson>();
            foreach (var c in AllCharacters)
            {
                all.Add(new GalagaCharacterJson()
                {
                    Id = (int)c,
                    Page = GetCharacterUrl(c),
                    Name = GetCharacterName(c),
                    Image = GetLegoImageUrl(c)
                });
            }
            return all;
        }
            

        public static string GetCharacterName(GalagaCharacter character)
        {
            switch (character)
            {
                case GalagaCharacter.Fighter:
                    return "Fighter";
                case GalagaCharacter.Galaga:
                    return "Galaga";
                case GalagaCharacter.Butterfly:
                    return "Butterfly";
                case GalagaCharacter.Bumblebee:
                    return "Bumblebee";
                default:
                    return character.ToString();
            }
        }

        public static string GetEvolutionImageUrl(GalagaCharacter character, int version = 1)
        {
            if (version == 1)
                return $"/images/galaga/icons/blocks/{character}.png".ToLowerInvariant();
            else
                return $"/images/galaga/evolution/{character}-{version}.png".ToLowerInvariant();
        }

        public static string GetCubeImageUrl(GalagaCharacter character, RenderDirections direction)
        {
            switch (character)
            {
                case GalagaCharacter.Fighter:
                case GalagaCharacter.Galaga:
                case GalagaCharacter.Butterfly:
                case GalagaCharacter.Bumblebee:
                    return $"/images/galaga/prototype/{character}/{direction}.jpg".ToLowerInvariant();
                default:
                    return $"/images/galaga/others/{character}.jpg".ToLowerInvariant();
            }
        }

        public static string GetFlatImageUrl(GalagaCharacter character, RenderDirections direction)
        {
            var dir = direction.ToString();
            if (direction == RenderDirections.Left || direction == RenderDirections.Right) dir = "side";
            return $"/images/galaga/flatlander/{character}-{dir}.jpg".ToLowerInvariant();
        }


        public static string GetQuadThumbUrl(GalagaCharacter character, int angle)
        {
            return $"/images/galaga/angles/thumb/{character}-{angle.ToString("000")}.jpg".ToLowerInvariant();
        }

        public static string GetQuadImageUrl(GalagaCharacter character, int angle)
        {
            return $"/images/galaga/angles/{character}-{angle.ToString("000")}.jpg".ToLowerInvariant();
        }

        public static string GetIconImageUrl(GalagaCharacter character, bool svg = true)
		{
			return $"/images/galaga/icons/{(svg ? "svg" : "blocks")}/{character}.{(svg ? "svg" : "png")}".ToLowerInvariant();
		}
        public static string GetSpriteImageUrl(GalagaCharacter character, bool closed = false)
        {
            var state = (closed ? "2" : "");
            return $"/images/galaga/icons/svg/{character}{state}.svg".ToLowerInvariant();
        }

        public static string GetStateImageUrl(GalagaCharacter character, bool closed = false)
        {
            var state = (closed ? "closed" : "open");
            return $"/images/galaga/states/{character}-{state}.png".ToLowerInvariant();
        }

        public static string GetAngleImageUrl(GalagaCharacter character)
        {
            return $"/images/galaga/states/{character}-angle.png".ToLowerInvariant();
        }

        public static string GetLegoImageUrl(GalagaCharacter character)
		{
			return $"/images/galaga/icons/lego/{character}.png".ToLowerInvariant();
		}

		public static string GetCharacterUrl(GalagaCharacter character)
		{
			return $"/galaga/characters/{character}/".ToLowerInvariant();
		}
	}
}