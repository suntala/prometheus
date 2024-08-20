import React, { FC } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { withStatusIndicator } from '../../components/withStatusIndicator';
import { QuestionContent } from './QuestionContent';
import { usePathPrefix } from '../../contexts/PathPrefixContext';
import { API_PATH } from '../../constants/constants';

const QuestionWithStatusIndicator = withStatusIndicator(QuestionContent);

export const Question: FC = () => {
  const {
    response: fetchRes,
    error: fetchErr,
    isLoading,
  } = useFetch<{ question: string }>(`http://localhost:9090/${API_PATH}/tour/questions`);

  return <QuestionWithStatusIndicator response={fetchRes} error={fetchErr} isLoading={isLoading} />;
};

export default Question;
