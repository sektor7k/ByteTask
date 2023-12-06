import { useState } from "react";

const apiUrl = 'http://localhost:8080';

export async function Request(apirequestmethod: string, data: any) {
  try {
    const headers = {
      'Content-Type': 'application/json'
    };

    const response = await fetch(`${apiUrl}/${apirequestmethod}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return await response.json();
    } else {
      const errorResponse = await response.text();
      throw new Error(errorResponse);
    }
  } catch (error) {
    console.error('Error in Request function:', error);
    throw error; // Hata yönetimi için hatayı dışarı fırlat
  }
}