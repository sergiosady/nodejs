import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nome é obrigatório"],
      trim: true,
      minlength: [3, "Nome deve ter no mínimo 3 caracteres"],
      maxlength: [100, "Nome não pode exceder 100 caracteres"],
    },
    email: {
      type: String,
      required: [true, "Email é obrigatório"],
      unique: [true, "Email já existe"],
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Por favor, insira um email válido",
      ],
    },
    password: {
      type: String,
      required: [true, "Senha é obrigatória"],
      minlength: [3, "Senha deve ter no mínimo 3 caracteres"],
      select: false, // Não retorna a senha por padrão
    },
    age: {
      type: Number,
      required: [true, "Idade é obrigatória"],
      min: [18, "Você deve ter no mínimo 18 anos"],
      max: [120, "Idade inválida"],
    },
  },
  { timestamps: true },
);

export default mongoose.model("User", userSchema);
