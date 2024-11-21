# 🚩 채용달력 만들기

## 📫 결과물 미리보기

---

## ▶️ 프로젝트 실행

```jsx
$ git clone git@github.com:yurim22/anchoreer-frontend-assignment.git
$ cd anchoreer-frontend-assignment
$ yarn

// 프로젝트 실행
$ yarn dev

// http://localhost:5173/ 로 접속하여 확인 가능합니다.
```

## 🔑 핵심 기능

---

### 1)채용달력 노출

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d193e50f-e5e8-4d9e-a334-467dd8c257fe/2ff213fa-5a98-415f-925a-48c9c6fcf0ca/image.png)

-   **월 네비게이션 구현**
    -   달력 상단에 현재 년/월을 표시하며 이전 월, 다음 월로 이동이 가능합니다.
-   **달력 구현**
    -   노출되고 있는 월에 해당하는 달력이 노출됩니다.
    -   일/월/화/수/목/금/토 순으로 요일을 표시합니다.
    -   달력의 첫 날은 1일이 포함되는 주의 일요일로 노출합니다.
    -   달력의 마지막 날은 마지막 날이 포함되는 주의 토요일로 노출합니다.
-   **채용정보 노출**
    -   각 일자에 시작 또는 마감하는 공고의 기업명 목록을 표시합니다.
    -   노출 우선순위 : 시작 > 마감
    -   채용 달력 내 회사 명을 입력하면 상세 정보 모달이 노출됩니다.

### 2) 채용 상세 정보 모달

![Screenshot 2024-11-21 at 5.45.18 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d193e50f-e5e8-4d9e-a334-467dd8c257fe/4833670b-8af4-46aa-8380-f0d1c25f8b65/Screenshot_2024-11-21_at_5.45.18_PM.png)

-   원하는 회사의 공고를 선택하면 상세정보를 확인 가능합니다.
-   해당 공고의 기업명, 제목, 채용 공고의 시작일, 마감일, 채용 공고 이미지가 노출됩니다.
-   모달의 양 옆에는 이전/다음 공고로 넘어갈 수 있는 버튼이 있습니다.
    -   이전 버튼을 선택하면 이전 공고의 상세정보를 확인 가능합니다.
    -   다음 버튼을 선택하면 이전 공고의 상세정보를 확인 가능합니다.

### 3) 직무 정보 노출

![Screenshot 2024-11-21 at 5.51.34 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d193e50f-e5e8-4d9e-a334-467dd8c257fe/9553b371-f216-4240-a6a6-f081dc1e44a2/Screenshot_2024-11-21_at_5.51.34_PM.png)

-   **직무의 계층 정보 노출**
    -   상위 계층부터 하위 계층까지의 관계를 확인 가능합니다.
    -   중첩 컴포넌트를 활용하여 계층 구조에 대한 확인을 쉽게 할 수 있습니다.

### 4) 에러 핸들링 처리

![Screenshot 2024-11-21 at 5.57.16 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d193e50f-e5e8-4d9e-a334-467dd8c257fe/74c77edf-d76e-450c-9ef6-26d65f8248a0/Screenshot_2024-11-21_at_5.57.16_PM.png)

-   **API 호출 에러 핸들링**
    -   api 호출 시 발생 할 수 있는 에러들에 대해 미리 정의하였습니다.
    -   해당 에러들을 사용자에게 노출하여 불편함을 줄이기 위해 Fallback ui를 추가로 생성하였습니다.
        -   `다시시도` 버튼을 통해 api를 새로 불러오도록 유도하였습니다.

## 🛠️ 사용 기술

---

-   **React**: 페이지 별 빌드 파일을 분리하고 공통 컴포넌트를 관리하기 위해 사용했습니다.
-   **Tanstack-Query**: server state 와 client state를 분리하고 API 캐시를 통해 최적화하기 위해 사용했습니다.
-   **Zustand** : 전역 상태 관리를 간단하고 직관적으로 구현하기 위해 사용했습니다. 필요에 따라 상태를 구독하거나 업데이트할 수 있어, 불필요한 리렌더링을 최소화하고 성능을 최적화할 수 있었습니다.
-   **Typescript**: 타입을 정확히 명시하여 프로젝트의 안정성을 높이기 위해 사용했습니다.
-   **Scss**: css를 구조화해서 효율적으로 관리하고, 자주 사용되는 css는 Mixin을 통해 중복을 없애기 위해 사용했습니다.
-   **Vite :** 빠른 개발 환경 설정을 위해 사용했습니다. HMR(Hot Module Replacement)을 지원하여 코드 변경 시 빠르게 반영됩니다.

## 💎 구현 상세

---

**개발환경 구성 및 아키텍쳐 설계**

-   높은 응집도의 모듈을 활용하여 컴포넌트의 목적을 명확하게 하였습니다.
-   DRY원칙을 준수하고 코드의 추상화를 통해 해당 모듈을 재사용 가능하도록 설계하였습니다.
-   관심사에 따라 비지니스 로직과 UI 로직을 분리하여 재사용성 극대화하였습니다.
-   FSD 폴더 구조를 참고하여 해당 프로젝트에 맞게 파일의 관심사를 분리하였습니다.

**중첩 컴포넌트 활용한 계층 구조 설계**

-   `<FilterGroup />` 컴포넌트 내부에서 하위 직무를 중첩적으로 나타내기 위해 재귀 호출을 사용하여, 부서의 계층 구조를 직관적이고 유연하게 표현할 수 있도록 설계했습니다. 이를 통해 각 직무의 하위 직무가 계층적으로 연결되며, 깊이 있는 구조를 자연스럽게 시각화할 수 있습니다.

**채용달력 노출을 위한 데이터 핸들링 (feat. `Map` 구조 활용)**

-   각 일자에 노출되어야하는 기업들을 확인하기 위해 채용의 시작날짜와 종료날짜를 확인하여 ‘날짜’를 key로 한 Map 구조를 생성하였습니다.
-   예시)

![Screenshot 2024-11-21 at 6.06.50 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d193e50f-e5e8-4d9e-a334-467dd8c257fe/303704ed-afb8-4908-be5c-e52eeed64ba7/Screenshot_2024-11-21_at_6.06.50_PM.png)

-   이를 활용하여 각 날짜에 맞는 노출정보를 빠르게 찾을 수 있었으며 type으로 ‘시작’과 ‘종료’를 구별하여 시각적으로 노출하였습니다.

**Error Boundary를 활용한 에러 처리**

-   `<ApiQueryWrapper />` 컴포넌트 내부에서 tanstack-query를 사용하며 발생할 수 있는 api 통신 중의 에러를 캐치하고 이를 사용자에게 알리기 위한 시각적인 피드백을 제공하였습니다.

## ⚽️ 트러블슈팅

---

### 직무 계층 구조의 트리 렌더링 구현 과정

구상한 화면에 맞는 컴포넌트를 구현하기 위해서는 api를 통해 받아온 duty 정보에 대한 **데이터 핸들링**이 필요하였습니다.

-   **직무 트리 구조 생성**

    -   API로 응답받은 duty 정보들에 대해서 재귀함수(buildHierarchy)를 활용하여 직무간의 계층구조를 새로 설정하였습니다.

    ```jsx
    // 계층 구조를 생성하는 함수
    const buildHierarchy = (
    	data: IDuties[],
    	parentId: number | null = null,
    ): IHierarchy[] => {
    	return data
    		.filter((item: IDuties) => item.parent_id === parentId)
    		.map((item: IDuties) => ({
    			id: item.id,
    			name: item.name,
    			children: buildHierarchy(data, item.id),
    		}));
    };
    ```

-   **중첩 컴포넌트 활용 및 재귀적 호출**
    -   `<FilterGroup />` component 내부에서 중첩 구조를 처리하고, 재귀적으로 자기 자신을 호출하여 하위 부서를 렌더링하도록 하였습니다.
