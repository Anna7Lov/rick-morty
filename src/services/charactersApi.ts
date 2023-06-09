import {
  CharacterItemModel,
  CharactersSearchResponseType
} from './types';
import { BASE_URL, commonHeaders } from './constants';

interface CallApiEndpointParameters<BodyType> {
  endpoint: string;
  method?: string;
  headers?: { [index: string]: string };
  body?: BodyType;
}

interface CallApiEndpointResult<ResponseType> {
  error?: Error;
  success: boolean;
  response?: ResponseType;
}

export const callApiEndpoint = async <BodyType, ResponseType>({
  endpoint,
  method,
  body,
  headers
}: CallApiEndpointParameters<BodyType>):
Promise<CallApiEndpointResult<ResponseType>
> => {
  try {
    const response = await fetch([BASE_URL, endpoint].join('/'), {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers: { ...commonHeaders, ...headers }
    });
    if (response.ok) {
      const responseJson = await response.json();
      return {
        success: true,
        response: responseJson
      };
    }
    return {
      success: false,
      error: new Error(response.status.toString())
    };
  } catch (error) {
    return {
      success: false,
      error: new Error('Something went wrong')
    };
  }
};

export const searchCharacters = async (
  query: string
): Promise<CallApiEndpointResult<CharactersSearchResponseType>> =>
  await callApiEndpoint<undefined, CharactersSearchResponseType>({
    endpoint: `api/character/?name=${query}`,
    method: 'GET'
  });

export const getCharacter = async (
  id: string
): Promise<CallApiEndpointResult<CharacterItemModel>> =>
  await callApiEndpoint<undefined, CharacterItemModel>({
    endpoint: `api/character/${id}`,
    method: 'GET'
  });
