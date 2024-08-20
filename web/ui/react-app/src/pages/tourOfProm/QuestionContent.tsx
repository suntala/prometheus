import React, { FC } from 'react';
import { APIResponse } from '../../hooks/useFetch';

interface QuestionContentProps {
  response: APIResponse<QuestionResult>;
}

interface QuestionResult {
  question: string;
}

export const QuestionContent: FC<QuestionContentProps> = ({ response }) => {
  if (response.data) {
    return (
      <label>
        Input Value:
        <textarea rows={15} cols={110} defaultValue={response.data.question}></textarea>
      </label>
    );
  }
  return null;
};
