import React, { FC, useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { API_PATH } from '../../constants/constants';
import { usePathPrefix } from '../../contexts/PathPrefixContext';
import { Question } from './Question';

// import { Table } from 'reactstrap';

// import { useFetch } from '../../hooks/useFetch';
// import { withStatusIndicator } from '../../components/withStatusIndicator';
// import { usePathPrefix } from '../../contexts/PathPrefixContext';
// import { API_PATH } from '../../constants/constants';

// interface Stats {
//   name: string;
//   value: number;
// }

// interface HeadStats {
//   numSeries: number;
//   numLabelPairs: number;
//   chunkCount: number;
//   minTime: number;
//   maxTime: number;
// }

// export interface TSDB2Map {
//   headStats: HeadStats;
//   seriesCountByMetricName: Stats[];
//   labelValueCountByLabelName: Stats[];
//   memoryInBytesByLabelName: Stats[];
//   seriesCountByLabelValuePair: Stats[];
// }

// export const TSDB2StatusContent: FC<TSDB2Map> = ({
//   headStats,
//   labelValueCountByLabelName,
//   seriesCountByMetricName,
//   memoryInBytesByLabelName,
//   seriesCountByLabelValuePair,
// }) => {
//   const unixToTime = (unix: number): string => {
//     try {
//       return `${new Date(unix).toISOString()} (${unix})`;
//     } catch {
//       if (numSeries === 0) {
//         return 'No datapoints yet';
//       }
//       return `Error parsing time (${unix})`;
//     }
//   };
//   const { chunkCount, numSeries, numLabelPairs, minTime, maxTime } = headStats;
//   const stats = [
//     { header: 'Number of Series', value: numSeries },
//     { header: 'Number of Chunks', value: chunkCount },
//     { header: 'Number of Label Pairs', value: numLabelPairs },
//     { header: 'Current Min Time', value: `${unixToTime(minTime)}` },
//     { header: 'Current Max Time', value: `${unixToTime(maxTime)}` },
//   ];
//   return (
//     <div>
//       <h2>Tour of Prom</h2>
//       {/* <h3 className="p-2">Head Stats</h3>
//       <div className="p-2">
//         <Table bordered size="sm" striped>
//           <thead>
//             <tr>
//               {stats.map(({ header }) => {
//                 return <th key={header}>{header}</th>;
//               })}
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               {stats.map(({ header, value }) => {
//                 return <td key={header}>{value}</td>;
//               })}
//             </tr>
//           </tbody>
//         </Table>
//       </div>
//       <h3 className="p-2">Head Cardinality Stats</h3>
//       {[
//         { title: 'Top 10 label names with value count', stats: labelValueCountByLabelName },
//         { title: 'Top 10 series count by metric names', stats: seriesCountByMetricName },
//         { title: 'Top 10 label names with high memory usage', unit: 'Bytes', stats: memoryInBytesByLabelName },
//         { title: 'Top 10 series count by label value pairs', stats: seriesCountByLabelValuePair },
//       ].map(({ title, unit = 'Count', stats }) => {
//         return (
//           <div className="p-2" key={title}>
//             <h3>{title}</h3>
//             <Table bordered size="sm" striped>
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>{unit}</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {stats.map(({ name, value }) => {
//                   return (
//                     <tr key={name}>
//                       <td>{name}</td>
//                       <td>{value}</td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </Table>
//           </div>
//         );
//       })} */}
//     </div>
//   );
// };
// TSDB2StatusContent.displayName = 'TSDB2StatusContent';

// const TSDB2StatusContentWithStatusIndicator = withStatusIndicator(TSDB2StatusContent);

// const TSDB2Status: FC = () => {
const TourOfProm: FC = () => {
  // const pathPrefix = usePathPrefix();
  // const { response, error, isLoading } = useFetch<TSDB2Map>(`${pathPrefix}/${API_PATH}/status/tsdb`);

  return (
    <div>
      <h2>Tour of Prom</h2>
      <p>
        sort &#40; v instant-vector &#41; returns vector elements sorted by their sample values, in ascending order. Native
        histograms are sorted by their sum of observations. Please note that sort only affects the results of instant
        queries, as range query results always have a fixed output ordering.
      </p>
      {/* <textarea>load 5m job="api-server", instance="0", group="production"&#125; 0+10x10</textarea> */}

      <ControlledComponent />
    </div>
    // <TSDB2StatusContentWithStatusIndicator
    //   error={error}
    //   isLoading={isLoading}
    //   {...response.data}
    //   componentTitle="TSDB2 Status information"
    // />
  );
};

// const ControlledComponent: () => {
function ControlledComponent() {
  // replace string here with test file input
  const [inputValue, setInputValue] = useState('');
  const onQuestionChange = (value: any) => setInputValue(value);
  // const pathPrefix = usePathPrefix();
  // TODO figure out how to get usePathPrefix to work or change it ==> useFetch<string[]>(`${pathPrefix}/${API_PATH}/
  // const { response: fetchRes, error: fetchErr } = useFetch<{ question: string }>(
  //   `http://localhost:9090/${API_PATH}/tour/question`
  // );
  // const { response: fetchRes, error: fetchErr } = useFetch<{ result: string }>(`${pathPrefix}/${API_PATH}/tour/question`);
  // const [inputError, setInputError] = useState('');
  // const [inputSuccess, setInputSuccess] = useState('');
  // const apple = "apple";

  // const handleChange = (event: any) => {
  //   const value = event.target.value;
  //   setInputValue(value);

  //   if (value.length < 5) {
  //     setInputError('Input must be at least 5 characters');
  //   } else {
  //     setInputError('');
  //   }
  // };

  type FormData = {
    body: string;
  };

  function handleSubmit(event: any) {
    event.preventDefault();
    // if (inputValue.length >= 5) {
    // submit form
    // setInputSuccess('succeeded!');
    // setInputError('');
    console.log(inputValue);

    const body: FormData = {
      body: inputValue,
    };

    const formData = JSON.stringify(body);

    fetch(
      // 'http://localhost:9090/api/v1/query?query=sort_by_label%28prometheus_http_request_duration_seconds_count%2C+%22prometheus_http_request_duration_seconds_count%22%29&time=1723652583.255&apple=fruit',
      'http://localhost:9090/api/v1/tour/answer?apple=fruit',
      {
        method: 'POST',
        // body: `{"body": "${inputValue.replace(/\s+/g, '').replace(/"/g, 'quotationmark').replace(/\//g, 'forwardslash')}"}`,
        // body: `${JSON.stringify({ 'body': `${inputValue.replace(/\s+/g, '')}` })}`,
        body: formData,
        cache: 'no-store',
        credentials: 'same-origin',
        // signal: abortController.signal,
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
    // } else {
    //   setInputSuccess('');
    //   setInputError('Submit error Input must be at least 5 characters');
    // }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Question onQuestionChange={onQuestionChange}></Question>
      {/* {inputError && <div style={{ color: 'red' }}>{inputError}</div>}
      {inputSuccess && <div style={{ color: 'green' }}>{inputSuccess}</div>} */}
      <button type="submit">Submit</button>
      <p>Input Value: {inputValue}</p>
    </form>
  );
}

// {/* <p>
// Input Value: {inputValue}
// {/* {data} */}
// </p>
// </form> */}

// export default TSDB2Status;
export default TourOfProm;

// load 5m
// 	http_requests &#123; job="api-server &#125;	0+10x10

// eval_ordered instant at 50m sort(http_requests)

// v instant-vector returns vector elements sorted by their sample values, in ascending order.
// Native histograms are sorted by their sum of observations. Please note that sort only affects the results of instant queries,
// as range query results always have a fixed output ordering.

// load 5m
// 	http_requests{job="api-server", instance="0", group="production"}	0+10x10
// 	http_requests{job="api-server", instance="1", group="production"}	0+20x10
// 	http_requests{job="api-server", instance="0", group="canary"}		0+30x10
// 	http_requests{job="api-server", instance="1", group="canary"}		0+40x10
// 	http_requests{job="api-server", instance="2", group="canary"}		NaN NaN NaN NaN NaN NaN NaN NaN NaN NaN
// 	http_requests{job="app-server", instance="0", group="production"}	0+50x10
// 	http_requests{job="app-server", instance="1", group="production"}	0+60x10
// 	http_requests{job="app-server", instance="0", group="canary"}		0+70x10
// 	http_requests{job="app-server", instance="1", group="canary"}		0+80x10

// eval_ordered instant at 50m sort(http_requests)

// load 5m &#10; &#13; \\n http_requests &#123;job="api-server", instance="0", group="production"&#125; 0+10x10
// {
//   /* <br></br> */
// }

// {/* <textarea rows={15} cols={110}>
// {/* prettier-ignore */}
// load 5m
// {/* prettier-ignore */}
// job="api-server", instance="0", group="production"&#125; 0+10x10
// </textarea> */}
