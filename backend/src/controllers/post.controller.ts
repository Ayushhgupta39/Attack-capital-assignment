import { Request, Response } from "express";
import { Post } from "../models/post.model";
import { User } from "../models/user.model";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const newPost = new Post({
      title,
      content,
      author: req.user.id,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: "Server error creating post" });
  }
};

export const getAllPosts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const posts = await Post.find().populate("author", "email");
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const filterPosts = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { authorId } = req.query;

    const authorData = await User.findById(authorId);
    if (!authorData) {
      return res.status(404).json({ message: "Author not found" });
    }
    const posts = await Post.find({ author: authorData._id }).populate(
      "author",
      "email"
    );
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Server error fetching posts" });
  }
};

export const getPostById = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id).populate("author", "email");

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Server error fetching post" });
  }
};
