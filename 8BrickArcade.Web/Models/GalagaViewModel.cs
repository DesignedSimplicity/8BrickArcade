using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace _8BrickArcade.Models
{
    public enum RenderDirections
    {
        Top, Bottom, Front, Back, Left, Right
    }

    public enum GalagaCharacter
	{
		None = 0,
		Player = 1,
		Galaga = 2,
		Butterfly = 3,
		Bumblebee = 4,
		Bosconian = 5,
		Mosquito = 6,
		Scorpion = 7,
		Galaxian = 8,
		Spinner = 9,
		Treker = 10,

        Enterprise = 100,
        Satellite = 90,
        Dragonfly = 60,
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
        Sasori = 6,
        Galaxian = 8,

        Tonbo = 60,
        Momiji = 90,
        Enterprise = 100,
    }

    public class GalagaViewModel
	{
		public GalagaViewModel(GalagaCharacter? character = null) { SelectedCharacter = character.HasValue ? character.Value : GalagaCharacter.None; }

		public GalagaCharacter SelectedCharacter { get; set; }
		public bool HasSelectedCharacter { get { return SelectedCharacter != GalagaCharacter.None; } }
		public bool IsMainCharacter { get { return MainCharacters.Contains(SelectedCharacter); } }
        public bool HasCube { get { return CubeCharacters.Contains(SelectedCharacter); } }
        public string SelectedCharacterName { get { return GalagaViewModel.GetCharacterName2(SelectedCharacter); } }

        public List<GalagaCharacter> MainCharacters
        {
            get
            {
                var list = new List<GalagaCharacter>();
                list.Add(GalagaCharacter.Player);
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
                list.Add(GalagaCharacter.Player);
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
				list.Add(GalagaCharacter.Player);
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
                case GalagaCharacter.Player:
                    return "Player 1";
                case GalagaCharacter.Galaga:
                    return "Galaga Boss";
                case GalagaCharacter.Butterfly:
                    return "Red Butterfly";
                case GalagaCharacter.Bumblebee:
                    return "Blue Bumblebee";
                default:
                    return character.ToString();
            }
        }

        public static string GetCharacterName2(GalagaCharacter character)
        {
            switch (character)
            {
                case GalagaCharacter.Player:
                    return "Fighter";
                case GalagaCharacter.Galaga:
                    return "Galaga";
                case GalagaCharacter.Butterfly:
                    return "Butterfly";
                case GalagaCharacter.Bumblebee:
                    return "Bumblebee";
                default:
                    return GetCharacterName(character);
            }

        }

        public static string GetEvolutionImageUrl(GalagaCharacter character, int version = 1)
        {
            if (version == 1)
                return $"/images/galaga/icons/256/{character}.png".ToLowerInvariant();
            else
                return $"/images/galaga/evolution/{character}-{version}.png".ToLowerInvariant();
        }

        public static string GetCubeImageUrl(GalagaCharacter character, RenderDirections direction, int version = 1)
        {
            switch (character)
            {
                case GalagaCharacter.Player:
                case GalagaCharacter.Galaga:
                case GalagaCharacter.Butterfly:
                case GalagaCharacter.Bumblebee:
                    return $"/images/galaga/cubes/{character}/{version}/{direction}.{(version == 2 ? "png " : "jpg")}".ToLowerInvariant();
                default:
                    return $"/images/galaga/others/{character}.jpg".ToLowerInvariant();
            }
        }

        public static string GetFlatImageUrl(GalagaCharacter character, RenderDirections direction)
        {
            var dir = direction.ToString();
            if (direction == RenderDirections.Left || direction == RenderDirections.Right) dir = "side";
            return $"/images/galaga/flats/{character}/{dir}.jpg".ToLowerInvariant();
            //return $"/images/galaga/flat/{character}-{index}.jpg".ToLowerInvariant();
        }


        public static string GetQuadThumbUrl(GalagaCharacter character, int angle)
        {
            return $"/images/galaga/quad/256/{character}-{angle.ToString("000")}.jpg".ToLowerInvariant();
        }

        public static string GetQuadImageUrl(GalagaCharacter character, int angle)
        {
            return $"/images/galaga/quad/{character}-{angle.ToString("000")}.jpg".ToLowerInvariant();
        }

        public static string GetIconImageUrl(GalagaCharacter character, bool svg = true)
		{
			return $"/images/galaga/icons/{(svg ? "svg" : "256")}/{character}.{(svg ? "svg" : "png")}".ToLowerInvariant();
		}
        public static string GetSpriteImageUrl(GalagaCharacter character, bool closed = false)
        {
            var state = (closed ? "2" : "");
            return $"/images/galaga/icons/svg/{character}{state}.svg".ToLowerInvariant();
        }

        public static string GetStateImageUrl(GalagaCharacter character, bool closed = false)
        {
            var state = (closed ? "closed" : "open");
            return $"/images/galaga/angles/{character}-{state}.png".ToLowerInvariant();
        }

        public static string GetAngleImageUrl(GalagaCharacter character)
        {
            return $"/images/galaga/angles//{character}-angle.png".ToLowerInvariant();
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