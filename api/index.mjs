var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/app.ts
import "dotenv/config";
import express from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";

// lib/auth.ts
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

// lib/prisma.ts
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";

// generated/prisma/client.ts
import * as path from "path";
import { fileURLToPath } from "url";

// generated/prisma/internal/class.ts
import * as runtime from "@prisma/client/runtime/client";
var config = {
  "previewFeatures": [],
  "clientVersion": "7.3.0",
  "engineVersion": "9d6ad21cbbceab97458517b147a6a09ff43aa735",
  "activeProvider": "postgresql",
  "inlineSchema": 'model User {\n  id            String    @id\n  name          String\n  email         String\n  emailVerified Boolean   @default(false)\n  image         String?\n  createdAt     DateTime  @default(now())\n  updatedAt     DateTime  @updatedAt\n  sessions      Session[]\n  accounts      Account[]\n\n  role   String? @default("USER")\n  phone  String?\n  status String? @default("ACTIVE")\n\n  @@unique([email])\n  @@map("user")\n}\n\nmodel Session {\n  id        String   @id\n  expiresAt DateTime\n  token     String\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  ipAddress String?\n  userAgent String?\n  userId    String\n  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@unique([token])\n  @@index([userId])\n  @@map("session")\n}\n\nmodel Account {\n  id                    String    @id\n  accountId             String\n  providerId            String\n  userId                String\n  user                  User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n  accessToken           String?\n  refreshToken          String?\n  idToken               String?\n  accessTokenExpiresAt  DateTime?\n  refreshTokenExpiresAt DateTime?\n  scope                 String?\n  password              String?\n  createdAt             DateTime  @default(now())\n  updatedAt             DateTime  @updatedAt\n\n  @@index([userId])\n  @@map("account")\n}\n\nmodel Verification {\n  id         String   @id\n  identifier String\n  value      String\n  expiresAt  DateTime\n  createdAt  DateTime @default(now())\n  updatedAt  DateTime @updatedAt\n\n  @@index([identifier])\n  @@map("verification")\n}\n\nmodel categories {\n  id     String         @id @default(cuid())\n  name   String         @unique\n  status categoryStatus @default(ACTIVE)\n\n  menu      menu[]\n  createdAt DateTime @default(now())\n  updateAt  DateTime @default(now()) @updatedAt\n}\n\nenum categoryStatus {\n  ACTIVE\n  DEACTIVE\n}\n\nmodel menu {\n  id          String   @id @default(cuid())\n  name        String\n  isAvailable Boolean  @default(true)\n  price       Float\n  description String?\n  iamge       String?\n  tags        String[]\n  isFeatured  Boolean  @default(false)\n  isSignature Boolean  @default(false)\n  isNew       Boolean  @default(false)\n\n  review      review[]\n  orderItem   orderItem[]\n  category_id String\n  category    categories  @relation(fields: [category_id], references: [id], onDelete: Cascade)\n  createdAt   DateTime    @default(now())\n  updateAt    DateTime    @default(now()) @updatedAt\n}\n\nmodel order {\n  id              String        @id @default(cuid())\n  orderNumber     String        @unique\n  status          orderStatus   @default(PENDING)\n  subtotal        Float\n  deliveryFee     Float         @default(0)\n  totalAmount     Float\n  paymentStatus   PaymentStatus @default(PENDING) // Track if they paid\n  paymentMethod   PaymentMethod @default(CASH_ON_DELIVERY)\n  customerName    String\n  customerPhone   String\n  deliveryAddress String\n  deliveryNote    String?\n  user_id         String\n  items           orderItem[]\n  createdAt       DateTime      @default(now())\n  updateAt        DateTime      @default(now()) @updatedAt\n}\n\nmodel orderItem {\n  id        String   @id @default(cuid())\n  quantity  Int\n  price     Float\n  order_id  String\n  order     order    @relation(fields: [order_id], references: [id])\n  menu_id   String\n  menu      menu     @relation(fields: [menu_id], references: [id])\n  createdAt DateTime @default(now())\n  updateAt  DateTime @default(now()) @updatedAt\n}\n\nenum orderStatus {\n  PENDING\n  CONFIRMED\n  PREPARING\n  READY\n  OUT_FOR_DELIVERY\n  DELIVERED\n  CANCELLED\n}\n\nenum PaymentStatus {\n  PENDING\n  PAID\n  FAILED\n}\n\nenum PaymentMethod {\n  CASH_ON_DELIVERY\n  ONLINE\n}\n\nmodel review {\n  id      String  @id @default(cuid())\n  comment String? @db.Text\n\n  // own releation\n  parent_id       String?\n  related_comment review?  @relation("OWN_REL", fields: [parent_id], references: [id], onDelete: Cascade)\n  replies         review[] @relation("OWN_REL")\n  menu_id         String\n  menu            menu     @relation(fields: [menu_id], references: [id], onDelete: Cascade)\n  createdAt       DateTime @default(now())\n  updateAt        DateTime @default(now()) @updatedAt\n}\n\ngenerator client {\n  provider = "prisma-client"\n  output   = "../../generated/prisma"\n  // output   = "../generated/prisma"\n}\n\ndatasource db {\n  provider = "postgresql"\n}\n',
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  }
};
config.runtimeDataModel = JSON.parse('{"models":{"User":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"emailVerified","kind":"scalar","type":"Boolean"},{"name":"image","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"sessions","kind":"object","type":"Session","relationName":"SessionToUser"},{"name":"accounts","kind":"object","type":"Account","relationName":"AccountToUser"},{"name":"role","kind":"scalar","type":"String"},{"name":"phone","kind":"scalar","type":"String"},{"name":"status","kind":"scalar","type":"String"}],"dbName":"user"},"Session":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"token","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"ipAddress","kind":"scalar","type":"String"},{"name":"userAgent","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"SessionToUser"}],"dbName":"session"},"Account":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"accountId","kind":"scalar","type":"String"},{"name":"providerId","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"AccountToUser"},{"name":"accessToken","kind":"scalar","type":"String"},{"name":"refreshToken","kind":"scalar","type":"String"},{"name":"idToken","kind":"scalar","type":"String"},{"name":"accessTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"refreshTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"scope","kind":"scalar","type":"String"},{"name":"password","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"account"},"Verification":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"identifier","kind":"scalar","type":"String"},{"name":"value","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"verification"},"categories":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"status","kind":"enum","type":"categoryStatus"},{"name":"menu","kind":"object","type":"menu","relationName":"categoriesTomenu"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updateAt","kind":"scalar","type":"DateTime"}],"dbName":null},"menu":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"isAvailable","kind":"scalar","type":"Boolean"},{"name":"price","kind":"scalar","type":"Float"},{"name":"description","kind":"scalar","type":"String"},{"name":"iamge","kind":"scalar","type":"String"},{"name":"tags","kind":"scalar","type":"String"},{"name":"isFeatured","kind":"scalar","type":"Boolean"},{"name":"isSignature","kind":"scalar","type":"Boolean"},{"name":"isNew","kind":"scalar","type":"Boolean"},{"name":"review","kind":"object","type":"review","relationName":"menuToreview"},{"name":"orderItem","kind":"object","type":"orderItem","relationName":"menuToorderItem"},{"name":"category_id","kind":"scalar","type":"String"},{"name":"category","kind":"object","type":"categories","relationName":"categoriesTomenu"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updateAt","kind":"scalar","type":"DateTime"}],"dbName":null},"order":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"orderNumber","kind":"scalar","type":"String"},{"name":"status","kind":"enum","type":"orderStatus"},{"name":"subtotal","kind":"scalar","type":"Float"},{"name":"deliveryFee","kind":"scalar","type":"Float"},{"name":"totalAmount","kind":"scalar","type":"Float"},{"name":"paymentStatus","kind":"enum","type":"PaymentStatus"},{"name":"paymentMethod","kind":"enum","type":"PaymentMethod"},{"name":"customerName","kind":"scalar","type":"String"},{"name":"customerPhone","kind":"scalar","type":"String"},{"name":"deliveryAddress","kind":"scalar","type":"String"},{"name":"deliveryNote","kind":"scalar","type":"String"},{"name":"user_id","kind":"scalar","type":"String"},{"name":"items","kind":"object","type":"orderItem","relationName":"orderToorderItem"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updateAt","kind":"scalar","type":"DateTime"}],"dbName":null},"orderItem":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"quantity","kind":"scalar","type":"Int"},{"name":"price","kind":"scalar","type":"Float"},{"name":"order_id","kind":"scalar","type":"String"},{"name":"order","kind":"object","type":"order","relationName":"orderToorderItem"},{"name":"menu_id","kind":"scalar","type":"String"},{"name":"menu","kind":"object","type":"menu","relationName":"menuToorderItem"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updateAt","kind":"scalar","type":"DateTime"}],"dbName":null},"review":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"comment","kind":"scalar","type":"String"},{"name":"parent_id","kind":"scalar","type":"String"},{"name":"related_comment","kind":"object","type":"review","relationName":"OWN_REL"},{"name":"replies","kind":"object","type":"review","relationName":"OWN_REL"},{"name":"menu_id","kind":"scalar","type":"String"},{"name":"menu","kind":"object","type":"menu","relationName":"menuToreview"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updateAt","kind":"scalar","type":"DateTime"}],"dbName":null}},"enums":{},"types":{}}');
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer: Buffer2 } = await import("buffer");
  const wasmArray = Buffer2.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
  getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
  getQueryCompilerWasmModule: async () => {
    const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
    return await decodeBase64AsWasm(wasm);
  },
  importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
  return runtime.getPrismaClient(config);
}

// generated/prisma/internal/prismaNamespace.ts
var prismaNamespace_exports = {};
__export(prismaNamespace_exports, {
  AccountScalarFieldEnum: () => AccountScalarFieldEnum,
  AnyNull: () => AnyNull2,
  CategoriesScalarFieldEnum: () => CategoriesScalarFieldEnum,
  DbNull: () => DbNull2,
  Decimal: () => Decimal2,
  JsonNull: () => JsonNull2,
  MenuScalarFieldEnum: () => MenuScalarFieldEnum,
  ModelName: () => ModelName,
  NullTypes: () => NullTypes2,
  NullsOrder: () => NullsOrder,
  OrderItemScalarFieldEnum: () => OrderItemScalarFieldEnum,
  OrderScalarFieldEnum: () => OrderScalarFieldEnum,
  PrismaClientInitializationError: () => PrismaClientInitializationError2,
  PrismaClientKnownRequestError: () => PrismaClientKnownRequestError2,
  PrismaClientRustPanicError: () => PrismaClientRustPanicError2,
  PrismaClientUnknownRequestError: () => PrismaClientUnknownRequestError2,
  PrismaClientValidationError: () => PrismaClientValidationError2,
  QueryMode: () => QueryMode,
  ReviewScalarFieldEnum: () => ReviewScalarFieldEnum,
  SessionScalarFieldEnum: () => SessionScalarFieldEnum,
  SortOrder: () => SortOrder,
  Sql: () => Sql2,
  TransactionIsolationLevel: () => TransactionIsolationLevel,
  UserScalarFieldEnum: () => UserScalarFieldEnum,
  VerificationScalarFieldEnum: () => VerificationScalarFieldEnum,
  defineExtension: () => defineExtension,
  empty: () => empty2,
  getExtensionContext: () => getExtensionContext,
  join: () => join2,
  prismaVersion: () => prismaVersion,
  raw: () => raw2,
  sql: () => sql
});
import * as runtime2 from "@prisma/client/runtime/client";
var PrismaClientKnownRequestError2 = runtime2.PrismaClientKnownRequestError;
var PrismaClientUnknownRequestError2 = runtime2.PrismaClientUnknownRequestError;
var PrismaClientRustPanicError2 = runtime2.PrismaClientRustPanicError;
var PrismaClientInitializationError2 = runtime2.PrismaClientInitializationError;
var PrismaClientValidationError2 = runtime2.PrismaClientValidationError;
var sql = runtime2.sqltag;
var empty2 = runtime2.empty;
var join2 = runtime2.join;
var raw2 = runtime2.raw;
var Sql2 = runtime2.Sql;
var Decimal2 = runtime2.Decimal;
var getExtensionContext = runtime2.Extensions.getExtensionContext;
var prismaVersion = {
  client: "7.3.0",
  engine: "9d6ad21cbbceab97458517b147a6a09ff43aa735"
};
var NullTypes2 = {
  DbNull: runtime2.NullTypes.DbNull,
  JsonNull: runtime2.NullTypes.JsonNull,
  AnyNull: runtime2.NullTypes.AnyNull
};
var DbNull2 = runtime2.DbNull;
var JsonNull2 = runtime2.JsonNull;
var AnyNull2 = runtime2.AnyNull;
var ModelName = {
  User: "User",
  Session: "Session",
  Account: "Account",
  Verification: "Verification",
  categories: "categories",
  menu: "menu",
  order: "order",
  orderItem: "orderItem",
  review: "review"
};
var TransactionIsolationLevel = runtime2.makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable"
});
var UserScalarFieldEnum = {
  id: "id",
  name: "name",
  email: "email",
  emailVerified: "emailVerified",
  image: "image",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  role: "role",
  phone: "phone",
  status: "status"
};
var SessionScalarFieldEnum = {
  id: "id",
  expiresAt: "expiresAt",
  token: "token",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  ipAddress: "ipAddress",
  userAgent: "userAgent",
  userId: "userId"
};
var AccountScalarFieldEnum = {
  id: "id",
  accountId: "accountId",
  providerId: "providerId",
  userId: "userId",
  accessToken: "accessToken",
  refreshToken: "refreshToken",
  idToken: "idToken",
  accessTokenExpiresAt: "accessTokenExpiresAt",
  refreshTokenExpiresAt: "refreshTokenExpiresAt",
  scope: "scope",
  password: "password",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var VerificationScalarFieldEnum = {
  id: "id",
  identifier: "identifier",
  value: "value",
  expiresAt: "expiresAt",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var CategoriesScalarFieldEnum = {
  id: "id",
  name: "name",
  status: "status",
  createdAt: "createdAt",
  updateAt: "updateAt"
};
var MenuScalarFieldEnum = {
  id: "id",
  name: "name",
  isAvailable: "isAvailable",
  price: "price",
  description: "description",
  iamge: "iamge",
  tags: "tags",
  isFeatured: "isFeatured",
  isSignature: "isSignature",
  isNew: "isNew",
  category_id: "category_id",
  createdAt: "createdAt",
  updateAt: "updateAt"
};
var OrderScalarFieldEnum = {
  id: "id",
  orderNumber: "orderNumber",
  status: "status",
  subtotal: "subtotal",
  deliveryFee: "deliveryFee",
  totalAmount: "totalAmount",
  paymentStatus: "paymentStatus",
  paymentMethod: "paymentMethod",
  customerName: "customerName",
  customerPhone: "customerPhone",
  deliveryAddress: "deliveryAddress",
  deliveryNote: "deliveryNote",
  user_id: "user_id",
  createdAt: "createdAt",
  updateAt: "updateAt"
};
var OrderItemScalarFieldEnum = {
  id: "id",
  quantity: "quantity",
  price: "price",
  order_id: "order_id",
  menu_id: "menu_id",
  createdAt: "createdAt",
  updateAt: "updateAt"
};
var ReviewScalarFieldEnum = {
  id: "id",
  comment: "comment",
  parent_id: "parent_id",
  menu_id: "menu_id",
  createdAt: "createdAt",
  updateAt: "updateAt"
};
var SortOrder = {
  asc: "asc",
  desc: "desc"
};
var QueryMode = {
  default: "default",
  insensitive: "insensitive"
};
var NullsOrder = {
  first: "first",
  last: "last"
};
var defineExtension = runtime2.Extensions.defineExtension;

// generated/prisma/enums.ts
var categoryStatus = {
  ACTIVE: "ACTIVE",
  DEACTIVE: "DEACTIVE"
};

// generated/prisma/client.ts
globalThis["__dirname"] = path.dirname(fileURLToPath(import.meta.url));
var PrismaClient = getPrismaClientClass();

// lib/prisma.ts
var connectionString = `${process.env.DATABASE_URL}`;
var adapter = new PrismaPg({ connectionString });
var prisma = new PrismaClient({ adapter });

// lib/auth.ts
import nodemailer from "nodemailer";
var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  // Use true for port 465, false for port 587
  auth: {
    user: "abusayed.in22@gmail.com",
    pass: process.env.APP_PASSWORD
  }
});
var auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql"
  }),
  trustedOrigins: [process.env.FRONTEND_URL],
  // O-AUTH 
  socialProviders: {
    // google: {
    //   prompt: "select_account consent",
    //   accessType: "offline",
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    // },
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: true
  },
  emailVerification: {
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url, token }, request) => {
      const verificationUrl = `${process.env.FRONTEND_URL}/verify-email?token=${token}`;
      try {
        const info = await transporter.sendMail({
          from: '"next-level-blog" <prisma@gmail.com>',
          to: user.email,
          subject: "Hello \u2714",
          text: "Next-level-Blog email verification",
          // Plain-text version of the message
          html: `
                    <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Email Verification</title>
  </head>
  <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:#f4f6f8;">
    <div style="max-width:600px; margin:40px auto; background:#ffffff; padding:30px; border-radius:8px;">
      
      <h2 style="color:#333;">Verify your email address</h2>
      
      <p style="color:#555; font-size:16px;">
        Thanks for signing up for <strong>Next Level Blog</strong>!
      </p>

      <p style="color:#555; font-size:16px;">
        Please use the verification code below to complete your registration:
      </p>

      <div style="margin:30px 0; text-align:center;">
        <span style="display:inline-block; font-size:24px; letter-spacing:4px; padding:15px 25px; background:#f0f2f5; border-radius:6px; color:#111;">
          ${verificationUrl}
        </span>
      </div>

      <p style="color:#777; font-size:14px;">
        If you did not create this account, you can safely ignore this email.
      </p>

      <hr style="border:none; border-top:1px solid #eee; margin:30px 0;" />

      <p style="color:#999; font-size:12px;">
        \xA9 2026 Next Level Blog. All rights reserved.
      </p>
    </div>
  </body>
</html>

                    `
        });
        console.log("Message sent:", info.messageId);
      } catch (error) {
        console.log(error);
      }
    }
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "CUSTOMER" /* customer */,
        required: false
      },
      phone: {
        type: "string",
        required: false
      },
      status: {
        type: "string",
        defaultValue: "ACTIVE",
        required: false
      }
    }
  }
});

// src/middleware/error/notFound.ts
function notFound(req, res) {
  res.status(404).json({
    message: "Route not found!",
    path: req.originalUrl,
    date: Date()
  });
}
var notFound_default = notFound;

// src/modules/meals/meal.route.ts
import { Router } from "express";

// src/helper/PaginationSortingHelper.ts
var paginationSortingHelper = (options) => {
  const page = Number(options.page) || 1;
  const limit = Number(options.limit) || 5;
  const skip = (page - 1) * limit;
  const orderBy = options.orderBy ? options.orderBy : "createdAt";
  const order = options.order ? options.order : "desc";
  return { page, limit, skip, orderBy, order };
};
var PaginationSortingHelper_default = paginationSortingHelper;

// src/modules/meals/meals.service.ts
var getAllMeals = async ({ category_id, cuisine, dietary, minPrice, maxPrice, page, limit, skip, order, orderBy }) => {
  const andCondition = [];
  if (cuisine) {
    andCondition.push({
      OR: [
        {
          name: {
            contains: cuisine,
            mode: "insensitive"
          },
          description: {
            contains: cuisine,
            mode: "insensitive"
          }
        }
      ]
    });
  }
  ;
  if (category_id) {
    andCondition.push({
      category_id
    });
  }
  const res = await prisma.menu.findMany({
    take: limit,
    skip,
    where: {
      AND: andCondition
    },
    orderBy: orderBy ? { [orderBy]: order ?? "asc" } : { createdAt: "desc" },
    include: {
      _count: {
        select: {
          review: true
        }
      }
    }
  });
  const total = await prisma.menu.count({
    where: {
      AND: andCondition
    }
  });
  return {
    data: res,
    meta: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    }
  };
};
var createMeal = async (data, user_id) => {
  const result = await prisma.menu.create({
    data
  });
  return result;
};
var updateMeal = async (data, mealId) => {
  const menuData = await prisma.menu.findUniqueOrThrow({
    where: {
      id: mealId
    }
  });
  if (!menuData) {
    throw new Error("Meal not found!");
  }
  const result = await prisma.menu.update({
    where: {
      id: mealId
    },
    data
  });
  return result;
};
var deleteMeal = async (mealId) => {
  const existMenu = await prisma.menu.findUniqueOrThrow({
    where: {
      id: mealId
    },
    select: {
      id: true
    }
  });
  if (!existMenu) {
    throw new Error("Meal not found!");
  }
  const result = await prisma.menu.delete({
    where: {
      id: mealId
    }
  });
  return result;
};
var getSingleMeal = async (mealId) => {
  return await prisma.menu.findUniqueOrThrow({
    where: {
      id: mealId
    },
    include: {
      category: true,
      _count: {
        select: {
          review: true
        }
      },
      review: true
    }
  });
};
var mealsService = { getAllMeals, createMeal, updateMeal, getSingleMeal, deleteMeal };

// src/modules/meals/meals.controller.ts
async function getAllMeals2(req, res, next) {
  try {
    const { cuisine } = req.query;
    const cuisineString = typeof cuisine === "string" ? cuisine : "";
    const user_id = req.query.user_id;
    const category_id = req.query.category_id;
    const dietary = req.query.dietary;
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    const { page, limit, skip, orderBy, order } = PaginationSortingHelper_default(req.query);
    const result = await mealsService.getAllMeals({ cuisine: cuisineString, dietary, minPrice, maxPrice, category_id, page, limit, skip, orderBy, order });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error instanceof Error ? error.message : "Internal Server Error!" });
  }
}
async function createMeal2(req, res, next) {
  try {
    const user = req.user;
    const user_id = user?.id;
    if (!user) {
      res.status(404).json({ message: "Unauthorized!" });
    }
    const result = await mealsService.createMeal(req.body, user_id);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}
async function updateMeal2(req, res, next) {
  try {
    const user = req.user;
    const user_id = user?.id;
    const isAdmin = user?.role === "ADMIN" /* admin */;
    const { mealId } = req.params;
    if (!user) {
      res.status(404).json({ message: "Unauthorized!" });
    }
    const result = await mealsService.updateMeal(req.body, mealId);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}
async function deleteMeal2(req, res, next) {
  try {
    const user = req.user;
    const { mealId } = req.params;
    if (!user) {
      res.status(404).json({ message: "Unauthorized!" });
    }
    const result = await mealsService.deleteMeal(mealId);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}
async function getSingleMeal2(req, res, next) {
  try {
    const { mealId } = req.params;
    const result = await mealsService.getSingleMeal(mealId);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
}
var mealsController = { getAllMeals: getAllMeals2, createMeal: createMeal2, updateMeal: updateMeal2, getSingleMeal: getSingleMeal2, deleteMeal: deleteMeal2 };

// src/middleware/auth/authMiddleware.ts
var authMiddleware = (...roles) => {
  return async (req, res, next) => {
    try {
      const session = await auth.api.getSession({
        headers: req.headers
      });
      if (!session) {
        return res.status(401).send("Unauthorized");
      }
      if (!session.user.emailVerified) {
        return res.status(403).send("Please verify your email!");
      }
      req.user = {
        id: session.user.id,
        email: session.user.email,
        role: session.user.role,
        emailVerification: session.user.emailVerified
      };
      if (roles.length && !roles.includes(session.user.role)) {
        return res.status(403).send("Forbidden!, you don't have access to this resource");
      }
      next();
    } catch (error) {
      console.log(error instanceof Error ? error.message : "");
    }
  };
};
var authMiddleware_default = authMiddleware;

// src/modules/meals/meal.route.ts
var route = Router();
route.get("/", mealsController.getAllMeals);
route.post("/", authMiddleware_default("ADMIN" /* admin */, "PROVIDER" /* provider */), mealsController.createMeal);
route.patch("/:mealId", authMiddleware_default("ADMIN" /* admin */, "PROVIDER" /* provider */, "CUSTOMER" /* customer */), mealsController.updateMeal);
route.delete("/:mealId", authMiddleware_default("ADMIN" /* admin */, "PROVIDER" /* provider */, "CUSTOMER" /* customer */), mealsController.deleteMeal);
route.get("/details/:mealId", authMiddleware_default("ADMIN" /* admin */, "PROVIDER" /* provider */, "CUSTOMER" /* customer */), mealsController.getSingleMeal);
var mealsRoute = route;

// src/modules/category/category.route.ts
import { Router as Router2 } from "express";

// src/modules/category/category.service.ts
var getAllCategories = async () => {
  const res = await prisma.categories.findMany({
    where: {
      status: categoryStatus.ACTIVE
    },
    select: {
      id: true,
      name: true
    }
    // orderBy: orderBy ? { [orderBy]: order ?? 'asc' } : { createdAt: 'desc' },
    // include: {
    //     _count: {
    //         select: {
    //             review: true
    //         }
    //     }
    // }
  });
  return {
    data: res
  };
};
var createCategory = async (data) => {
  const result = await prisma.categories.create({
    data
  });
  return { data: result };
};
var categoryUpdate = async (data) => {
  const result = await prisma.categories.update({
    where: {
      id: data.id
    },
    data
  });
  return { data: result };
};
var categoryService = { getAllCategories, createCategory, categoryUpdate };

// src/modules/category/category.controller.ts
async function getAllCategories2(req, res, next) {
  try {
    const result = await categoryService.getAllCategories();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error instanceof Error ? error.message : "Internal Server Error!" });
  }
}
async function createCategory2(req, res, next) {
  try {
    const user = req.user;
    const user_id = user?.id;
    if (!user) {
      res.status(404).json({ message: "Unauthorized!" });
    }
    const result = await categoryService.createCategory(req.body);
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
}
async function categoryUpdate2(req, res, next) {
  try {
    const user = req.user;
    const user_id = user?.id;
    if (!user) {
      res.status(404).json({ message: "Unauthorized!" });
    }
    const result = await categoryService.categoryUpdate(req.body);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
}
var categoryController = { getAllCategories: getAllCategories2, createCategory: createCategory2, categoryUpdate: categoryUpdate2 };

// src/modules/category/category.route.ts
var route2 = Router2();
route2.get("/", categoryController.getAllCategories);
route2.post("/", authMiddleware_default("ADMIN" /* admin */), categoryController.createCategory);
route2.patch("/", authMiddleware_default("ADMIN" /* admin */), categoryController.categoryUpdate);
var categoryRoute = route2;

// src/modules/orders/orders.route.ts
import { Router as Router3 } from "express";

// src/modules/orders/orders.service.ts
var getAllOrders = async (user_id) => {
  const orders = await prisma.order.findMany({
    where: { user_id }
  });
  return orders;
};
var getSingleOrder = async (orderId, user_id) => {
  const orders = await prisma.order.findUnique({
    where: { id: orderId }
  });
  return orders;
};
var createOrder = async (data) => {
  const { items, user_id, deliveryFee, ...customerDetails } = data;
  const checkedMenu = await prisma.menu.findMany({
    where: {
      id: { in: data.items.map((i) => i.menu_id) }
    }
  });
  if (checkedMenu.length !== data.items.length) {
    throw new Error("One or more menu items are invalid");
  }
  let subTotal = 0;
  const orderItemsData = [];
  for (const item of items) {
    if (item.quantity <= 0) {
      throw new Error("Quantity must be greater than zero");
    }
    const price = Number(item.price);
    subTotal += price * item.quantity;
    orderItemsData.push({
      menu_id: item.menu_id,
      quantity: item.quantity,
      price
    });
  }
  ;
  const totalAmount = subTotal + deliveryFee;
  const result = await prisma.order.create({
    data: {
      orderNumber: generateOrderNumber(),
      subtotal: subTotal,
      deliveryFee,
      totalAmount,
      customerName: customerDetails.customerName,
      customerPhone: customerDetails.customerPhone,
      deliveryAddress: customerDetails.deliveryAddress,
      deliveryNote: customerDetails.deliveryNote ?? null,
      user_id,
      items: {
        create: orderItemsData
      }
    },
    include: {
      items: true
    }
  });
  return result;
};
var orederServices = { createOrder, getAllOrders, getSingleOrder };
var generateOrderNumber = () => {
  const now = /* @__PURE__ */ new Date();
  const datePart = now.toISOString().slice(0, 10).replace(/-/g, "");
  const randomPart = Math.floor(1e5 + Math.random() * 9e5).toString();
  return `ORD-${datePart}-${randomPart}`;
};

// src/modules/orders/orders.controller.ts
var createOrder2 = async (req, res) => {
  try {
    const user_id = req.user?.id;
    const data = req.body;
    if (!user_id) {
      res.status(404).json({ message: "Unauthorized!" });
    }
    const result = await orederServices.createOrder({ ...data, user_id });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Failed to place order"
    });
  }
};
var getAllOrders2 = async (req, res) => {
  try {
    const user_id = req.user?.id;
    if (!user_id) {
      res.status(404).json({ message: "Unauthorized!" });
    }
    const result = await orederServices.getAllOrders(user_id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Failed to place order"
    });
  }
};
var getSingleOrder2 = async (req, res) => {
  try {
    const { orderId } = req.params;
    const user_id = req.user?.id;
    if (!user_id) {
      res.status(404).json({ message: "Unauthorized!" });
    }
    const result = await orederServices.getSingleOrder(orderId, user_id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Failed to place order"
    });
  }
};
var ordersController = { createOrder: createOrder2, getAllOrders: getAllOrders2, getSingleOrder: getSingleOrder2 };

// src/modules/orders/orders.route.ts
var route3 = Router3();
route3.post("/", authMiddleware_default("CUSTOMER" /* customer */), ordersController.createOrder);
route3.get("/", authMiddleware_default("CUSTOMER" /* customer */, "PROVIDER" /* provider */, "ADMIN" /* admin */), ordersController.getAllOrders);
route3.get("/details/:orderId", authMiddleware_default("CUSTOMER" /* customer */), ordersController.getSingleOrder);
var orderRoute = route3;

// src/modules/admin/admin.route.ts
import { Router as Router4 } from "express";
var route4 = Router4();
route4.get("/users", authMiddleware_default("ADMIN" /* admin */));
var adminRoute = route4;

// src/middleware/error/globalErrorHandler.ts
function errorHandler(err, req, res, next) {
  let statusCode = 500;
  let errorMessage = "Internal server error!";
  let errorDetails = err;
  if (err instanceof prismaNamespace_exports.PrismaClientValidationError) {
    statusCode = 422;
    errorMessage = "You provided incorrect field or missing field!";
  } else if (err instanceof prismaNamespace_exports.PrismaClientKnownRequestError) {
    if (err.code === "P2025") {
      statusCode = 404;
      errorMessage = "No data was found for a query.";
    } else if (err.code === "P1008") {
      statusCode = 408;
      errorMessage = "Operations timed out after {time}";
    }
  } else if (err instanceof prismaNamespace_exports.PrismaClientUnknownRequestError) {
    statusCode = 400;
    errorMessage = "a non-recoverable error or an unexpected internal panic has occurred in the Prisma Query Engine";
  } else if (err instanceof prismaNamespace_exports.PrismaClientInitializationError) {
    if (err.errorCode === "P1000") {
      statusCode = 401;
      errorMessage = "Authentication failed against database server at {database_host}, the provided database credentials for {database_user} are not valid. Please make sure to provide valid database credentials for the database server at {database_host}.";
    } else if (err.errorCode === "P1001") {
      statusCode = 401;
      errorMessage = "Can't reach database server at {database_host}:{database_port} Please make sure your database server is running at {database_host}:{database_port}.";
    } else if (err.errorCode === "P1012") {
      statusCode = 401;
      errorMessage = "Argument {} is missing.";
    }
  }
  res.status(statusCode);
  res.json({
    message: errorMessage,
    err: errorDetails
  });
}
var globalErrorHandler_default = errorHandler;

// src/app.ts
var app = express();
var port = process.env.PORT;
app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());
app.all("/api/auth/{*any}", toNodeHandler(auth));
app.use("/api/meals", mealsRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/orders", orderRoute);
app.use("/api/provider/meals", authMiddleware_default("PROVIDER" /* provider */), mealsRoute);
app.use("/api/provider/orders", authMiddleware_default("PROVIDER" /* provider */), orderRoute);
app.use("/api/admin/users", authMiddleware_default("ADMIN" /* admin */), adminRoute);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});
app.use(notFound_default);
app.use(globalErrorHandler_default);

// src/index.ts
var index_default = app;
export {
  index_default as default
};
