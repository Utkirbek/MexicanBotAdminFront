import React from 'react';

import * as dayjs from 'dayjs';
import { TableCell, TableBody, TableRow } from '@windmill/react-ui';

import Status from '../table/Status';

import SelectStatus from '../form/SelectStatus';

const OrderTable = ({ orders }) => {
  return (
    <>
      <TableBody>
        {orders?.map((order, i) => (
          <TableRow key={i + 1}>
            <TableCell>
              <span className="font-semibold uppercase text-xs">{i + 1}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">
                {dayjs(order.createdAt).format("MMM D, YYYY")}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm">
                {order.address_name.substring(0, 25)}
              </span>
            </TableCell>

            <TableCell>
              {" "}
              <div className="flex flex-row">
                {(order?.cart).map((t, i) => (
                  <div className="flex flex-row">
                    <span
                      key={i + 1}
                      className="bg-gray-200 mr-2 border-0 text-gray-500 rounded-full inline-flex items-center justify-center px-2 py-1 text-xs font-semibold font-serif mt-2 dark:bg-gray-700 dark:text-gray-300"
                    >
                      {t.product?.title} x {t?.quantity}
                    </span>
                    {(t?.options).map((t, i) => (
                      <span
                        key={i + 1}
                        className="bg-gray-200 mr-2 border-0 text-gray-500 rounded-full inline-flex items-center justify-center px-2 py-1 text-xs font-semibold font-serif mt-2 dark:bg-gray-700 dark:text-gray-300"
                      >
                        {t?.label}
                      </span>
                    ))}
                    <br/>
                  </div>
                ))}
              </div>
            </TableCell>

            

            <TableCell>
              {" "}
              <span className="text-sm font-semibold">
                ${Math.round(order?.total)}.00
              </span>{" "}
            </TableCell>
            <TableCell className="text-center text-xs">
              <Status status={order?.status} />
            </TableCell>
            <TableCell className="text-center">
              <SelectStatus id={order?._id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default OrderTable;
