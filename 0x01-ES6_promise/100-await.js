import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [uploadPhotoResponse, createUserResponse] = await Promise.all([
      uploadPhoto(),
      createUser(),
    ]);

    return {
      photo: uploadPhotoResponse,
      user: createUserResponse,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
