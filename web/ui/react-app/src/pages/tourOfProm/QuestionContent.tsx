import React, { FC } from 'react';
import { APIResponse } from '../../hooks/useFetch';

interface QuestionContentProps {
  response: APIResponse<QuestionResult>;
  onQuestionChange: any;
}

interface QuestionResult {
  question: string;
}

export const QuestionContent: FC<QuestionContentProps> = ({ response, onQuestionChange }) => {
  if (response.data) {
    onQuestionChange(response.data.question);

    return (
      <label>
        Input Value:
        <textarea
          rows={15}
          cols={110}
          defaultValue={response.data.question}
          onChange={(e) => onQuestionChange(e.target.value)}
        ></textarea>
      </label>
    );
  }
  return null;
};
