# Partie sur la création d'un compte

## Pièce n°1

```typescript
const { data } = await signupMutation({
  variables: { data: { password: signup.password, email: signup.email } },
});
if (data && data.signup) {
  setTimeout(() => {
    navigate("/login");
  }, 1000);
  toast.success("Compte crée avec succès");
} else {
  setSignup(initialSignUp);
  toast.error("Erreur lors de la création de compte");
}
```

## Pièce n°2

```typescript
@InputType()
export class UserInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @MinLength(10)
  password: string;
}
```

## Pièce n°3

```typescript
import { UsersResolver } from "./users/user.resolvers";
```

## Pièce n°4

```typescript
const [signupMutation] = useSignupMutation();
const navigate = useNavigate();
```

## Pièce n°5

```typescript
import { useNavigate, Link } from "react-router";
import { useSignupMutation } from "./generated/graphql-types";
```

## Pièce n°6

```typescript
import Protected from "./pages/layout/Protected.tsx";
```

## Pièce n°7

```typescript
import { UserInput, Users, LoginOutPut } from "./user.entities";
```

## Pièce n°8

```typescript
if (user && user.isConnected) {
  return <Outlet />;
}
```

## Pièce n°9

```typescript
@Mutation(() => Boolean)
async signup(@Arg("data") data: UserInput) {
  try {
    // Some code here

    // Some code here
    return true;
  } catch (error) {
    throw new Error(error);
  }
}
```

## Pièce n°10

```typescript
const { password, email } = data;
const hash = await argon2.hash(password, hashOptions);
```

## Pièce n°11

```typescript
{
  path: "/",
  element: <Protected />,
  children: [
    {
      path: "trainers",
      element: <Trainers />,
    },
  ],
},
```

## Pièce n°12

```typescript
const user = new Users();
user.email = email;
user.hash = hash;
await user.save();
```

## Pièce n°13

```typescript
resolvers: [TrainersResolver, UsersResolver],
validate: true,
```

## Pièce n°14

```typescript
import { Navigate, Outlet } from "react-router";
```
