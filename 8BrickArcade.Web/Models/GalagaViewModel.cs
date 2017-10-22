using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace _8BrickArcade.Web.Models
{
    public enum RenderDirections
    {
        Top, Bottom, Front, Back, Left, Right
    }

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
                //list.Add(GalagaCharacter.Mosquito);
                //list.Add(GalagaCharacter.Spinner);
                //list.Add(GalagaCharacter.Treker);
                return list;
			}
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
                return $"/images/galaga/icons/256/{character}.png".ToLowerInvariant();
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
            return $"/images/galaga/states//{character}-angle.png".ToLowerInvariant();
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