using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace _8BrickArcade.Web.Models
{
    public class BaseViewModel
    {
        public List<CommentModel> Comments
        {
            get
            {
                List<CommentModel> comments = new List<CommentModel>();

                comments.Add(new CommentModel()
                {
                    Id = 1,
                    Author = "Kevin",
                    Text = "This is my first comment"
                });
                comments.Add(new CommentModel()
                {
                    Id = 2,
                    Author = "Bob",
                    Text = "This is another comment"
                });

                return comments;
            }
        }

    }

    public class CommentModel
    {
        public int Id { get; set; }
        public string Author { get; set; }
        public string Text { get; set; }
    }
}
