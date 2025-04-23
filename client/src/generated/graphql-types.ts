import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type LoginOutPut = {
  __typename?: 'LoginOutPut';
  email: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  isConnected: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: LoginOutPut;
  signup: Scalars['Boolean']['output'];
};


export type MutationLoginArgs = {
  data: UserInput;
};


export type MutationSignupArgs = {
  data: UserInput;
};

export type Query = {
  __typename?: 'Query';
  getAllTrainers: Array<Trainers>;
};

export type Trainers = {
  __typename?: 'Trainers';
  age: Scalars['Float']['output'];
  city: Scalars['String']['output'];
  firstname: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  lastname: Scalars['String']['output'];
  sex: Scalars['String']['output'];
  speciality: Scalars['String']['output'];
};

export type UserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type GetAllTrainersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTrainersQuery = { __typename?: 'Query', getAllTrainers: Array<{ __typename?: 'Trainers', age: number, city: string, firstname: string, id: number, lastname: string, sex: string, speciality: string }> };

export type SignupMutationVariables = Exact<{
  data: UserInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: boolean };

export type LoginMutationVariables = Exact<{
  data: UserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginOutPut', email: string, id: number, isConnected: boolean } };


export const GetAllTrainersDocument = gql`
    query GetAllTrainers {
  getAllTrainers {
    age
    city
    firstname
    id
    lastname
    sex
    speciality
  }
}
    `;

/**
 * __useGetAllTrainersQuery__
 *
 * To run a query within a React component, call `useGetAllTrainersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTrainersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTrainersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTrainersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTrainersQuery, GetAllTrainersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTrainersQuery, GetAllTrainersQueryVariables>(GetAllTrainersDocument, options);
      }
export function useGetAllTrainersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTrainersQuery, GetAllTrainersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTrainersQuery, GetAllTrainersQueryVariables>(GetAllTrainersDocument, options);
        }
export function useGetAllTrainersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllTrainersQuery, GetAllTrainersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllTrainersQuery, GetAllTrainersQueryVariables>(GetAllTrainersDocument, options);
        }
export type GetAllTrainersQueryHookResult = ReturnType<typeof useGetAllTrainersQuery>;
export type GetAllTrainersLazyQueryHookResult = ReturnType<typeof useGetAllTrainersLazyQuery>;
export type GetAllTrainersSuspenseQueryHookResult = ReturnType<typeof useGetAllTrainersSuspenseQuery>;
export type GetAllTrainersQueryResult = Apollo.QueryResult<GetAllTrainersQuery, GetAllTrainersQueryVariables>;
export const SignupDocument = gql`
    mutation Signup($data: UserInput!) {
  signup(data: $data)
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const LoginDocument = gql`
    mutation Login($data: UserInput!) {
  login(data: $data) {
    email
    id
    isConnected
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;