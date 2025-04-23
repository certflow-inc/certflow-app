'use server';

import { FETCH_TAGS } from '@/service/base/endpoints/endpoints.constants';
import { revalidateTag } from 'next/cache';

export async function revalidateAllQueries(): Promise<void> {
  console.log('=== Revalidating all queries... ===');
  Object.keys(FETCH_TAGS).map((key) => {
    const query = FETCH_TAGS[key as keyof typeof FETCH_TAGS];
    revalidateTag(query);
  });
}
