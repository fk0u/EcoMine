# EcoMine – API Specification (Draft)

Dokumen ini berisi rancangan awal endpoint API EcoMine untuk mendukung frontend dan integrasi data.

---

## 1. Konvensi Umum

- Base URL: `https://api.ecomine.local` (dev: `http://localhost:4000`)
- Format respon: JSON
- Zona waktu: UTC atau disepakati (disarankan UTC + offset di UI)
- Autentikasi: (Phase 2) Bearer Token / JWT – belum wajib di MVP.

---

## 2. Endpoint

### 2.1 Sites

#### GET `/sites`

Mengambil daftar site tambang yang terdaftar.

**Response (200)**

```json
[
  {
    "id": "uuid-site-1",
    "name": "Site Sangatta",
    "location": "Kaltim, Indonesia"
  },
  {
    "id": "uuid-site-2",
    "name": "Site Kelanis",
    "location": "Kalsel, Indonesia"
  }
]
```

---

### 2.2 Sensors

#### GET `/sites/:siteId/sensors`

Mengambil daftar sensor di suatu site.

**Response (200)**

```json
[
  {
    "id": "uuid-sensor-1",
    "name": "pH Inlet Sediment Pond A",
    "type": "pH",
    "unit": "",
    "threshold_low": 6.0,
    "threshold_high": 9.0
  },
  {
    "id": "uuid-sensor-2",
    "name": "TSS Outlet Sediment Pond A",
    "type": "TSS",
    "unit": "mg/L",
    "threshold_high": 100.0
  }
]
```

---

### 2.3 Sensor Readings

#### GET `/sensors/:sensorId/readings`

Query param:

- `from` (optional, ISO 8601)
- `to` (optional, ISO 8601)
- `limit` (optional, default 500)

**Response (200)**

```json
{
  "sensor": {
    "id": "uuid-sensor-1",
    "name": "pH Inlet Sediment Pond A",
    "type": "pH",
    "unit": ""
  },
  "readings": [
    {
      "value": 7.3,
      "recorded_at": "2026-01-06T02:00:00Z"
    },
    {
      "value": 7.1,
      "recorded_at": "2026-01-06T02:15:00Z"
    }
  ]
}
```

---

### 2.4 Alerts

#### GET `/alerts`

Parameter opsional:

- `siteId`
- `level` (warning/critical)
- `since` (ISO timestamp)

**Response (200)**

```json
[
  {
    "id": 1,
    "sensor_id": "uuid-sensor-2",
    "site_id": "uuid-site-1",
    "level": "critical",
    "message": "TSS above threshold (156 mg/L)",
    "triggered_at": "2026-01-06T03:15:00Z"
  }
]
```

---

### 2.5 Reports

#### POST `/reports/generate`

Body:

```json
{
  "site_id": "uuid-site-1",
  "from": "2026-01-01T00:00:00Z",
  "to": "2026-01-07T00:00:00Z"
}
```

**Response (202)** – asinkron (opsional):

```json
{
  "report_id": "uuid-report-1",
  "status": "processing"
}
```

#### GET `/reports/:reportId`

**Response (200)**

```json
{
  "id": "uuid-report-1",
  "site_id": "uuid-site-1",
  "status": "completed",
  "summary": {
    "period": {
      "from": "2026-01-01T00:00:00Z",
      "to": "2026-01-07T00:00:00Z"
    },
    "sensors": [
      {
        "sensor_id": "uuid-sensor-1",
        "type": "pH",
        "min": 6.8,
        "max": 7.5,
        "avg": 7.1,
        "violations": 0
      }
    ]
  },
  "download_url": "https://api.ecomine.local/reports/uuid-report-1/file"
}
```

Implementasi awal untuk hackathon boleh dikurangi: bisa langsung return `download_url` dan tidak perlu queue.

---

## 3. Error Response

Format umum:

```json
{
  "error": "Bad Request",
  "message": "Parameter 'from' is invalid",
  "statusCode": 400
}
```

---

## 4. Catatan Implementasi

- Rate limit & auth bisa ditambahkan di fase berikutnya.
- Endpoint ingestion (`POST /sensors/:id/readings`) boleh disembunyikan di balik internal service; di MVP bisa lewat script langsung ke DB.
