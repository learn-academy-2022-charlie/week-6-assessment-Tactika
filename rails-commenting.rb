# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This line defines a new class controller with a name of BlogPostsController inherrited from the ApplicationController class object
class BlogPostsController < ApplicationController
  def index
    # ---2) This line declares an instance variable named posts which equals all records in the BlogPost table (query finds all records)
    @posts = BlogPost.all
  end

  # ---3) This line defines the show action method for the individual blog posts
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) This line defines the new action method for creating the view to create a new blog post
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) This line declares a new instance variable named post, which equals a new record in the BlogPost table, after the params passed in have been varified by blog_post_params (strong params)
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) This line declares an instance variable named post thats value equals a single BlogPost record, found by using the id of the record
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) This line declares an instance variable named post thats value is equal to an updated post record, it's arguements are passed into the blog_post_params to ensure the items inputted are allowed before updating the record
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) This line redirects the user to the individual blog post path if the blog post id passed in isn't able to delete the record (ie Record doesn't exist or Error in destroying the record)
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) The private keyword allows all code below the line to not be accessible to anything other than the methods in this class object.
  private
  def blog_post_params
    # ---10) This line takes in a table (converted to a snake case symbol) and provides attributes which should be permitted
    params.require(:blog_post).permit(:title, :content)
  end
end
