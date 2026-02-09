import Link from "next/link";

export const metadata = {
  title: "MovieSir | 이태수",
  description: "AI 영화 추천 B2B API 서비스 - 인프라 설계 및 CI/CD 구축",
};

export default function MovieSirPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors mb-12 group"
        >
          <svg
            className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-sm">Projects</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">
                MovieSir
              </h1>
              <p className="text-gray-500">
                AI 기반 영화 추천 B2B API 서비스의 인프라 설계 및 운영
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link
                href="https://moviesir.cloud"
                target="_blank"
                className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:border-gray-400 hover:text-gray-900 transition-colors"
              >
                Service
              </Link>
              <Link
                href="https://github.com/Movigation/MovieSir"
                target="_blank"
                className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:border-gray-400 hover:text-gray-900 transition-colors"
              >
                GitHub
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-500 mb-5">
            <span>2025.12 - 2026.02</span>
            <span>5명</span>
            <span className="font-medium text-gray-700">인프라 · CI/CD · 보안</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {["KakaoCloud", "Docker", "GitHub Actions", "Nginx", "PostgreSQL", "Redis", "Let's Encrypt", "fail2ban"].map((tech) => (
              <span key={tech} className="px-2.5 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                {tech}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-600 leading-relaxed">
            SBERT + ALS 하이브리드 알고리즘 기반의 영화 추천 서비스.
            기업 고객이 B2B Console에서 API Key를 발급받아 자사 서비스에 연동하는 구조로,
            External API 분리 설계와 Rate Limiting 기반 플랜별 과금 체계를 구축했습니다.
            카카오클라우드 2-Tier VPC 아키텍처 설계, 4계층 보안 방어 체계,
            CI/CD 파이프라인 자동화, Cron 기반 서버 운영 자동화를 담당했습니다.
          </p>
        </div>

        <hr className="border-t border-gray-300 mb-12" />

        {/* 핵심 성과 */}
        <section className="mb-16 p-6 border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold text-gray-900 mb-4">핵심 성과</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <p className="text-2xl font-bold text-gray-900">5,227 → 0</p>
              <p className="text-sm text-gray-500">SSH 공격 차단</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <p className="text-2xl font-bold text-gray-900">A+</p>
              <p className="text-sm text-gray-500">SSL Labs 등급</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <p className="text-2xl font-bold text-gray-900">4개 도메인</p>
              <p className="text-sm text-gray-500">SSL 단일 서버 운영</p>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-300 mb-16" />

        {/* 인프라 아키텍처 */}
        <section className="mb-16">
          <h2 className="text-lg font-bold text-gray-900 mb-4 border-l-4 border-gray-900 pl-3">
            인프라 아키텍처
          </h2>
          <img
            src="/images/moviesir_infra_arch.png"
            alt="MovieSir 인프라 아키텍처"
            className="w-full rounded-lg mb-4"
          />
          <div className="border border-gray-200 rounded-lg overflow-x-auto">
            {/* VPC Header */}
            <div className="bg-gray-900 px-4 py-3">
              <p className="text-white font-medium">
                KakaoCloud VPC
                <span className="text-gray-400 font-normal ml-2 text-sm">10.0.0.0/16</span>
              </p>
            </div>

            {/* Server Table */}
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left text-gray-500 font-medium w-1/4">서버</th>
                  <th className="px-4 py-3 text-left text-gray-500 font-medium w-1/4">Subnet</th>
                  <th className="px-4 py-3 text-left text-gray-500 font-medium">서비스 (포트)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-4 align-middle">
                    <p className="font-semibold text-gray-900">App Server</p>
                    <p className="text-xs text-gray-400 mt-1">Bastion Host</p>
                  </td>
                  <td className="px-4 py-4 align-middle">
                    <span className="inline-block px-2 py-0.5 bg-gray-900 text-white text-xs rounded-full font-medium">Public</span>
                    <p className="text-xs text-gray-400 mt-1 font-mono">10.0.0.0/20</p>
                  </td>
                  <td className="px-4 py-4">
                    <p className="text-xs text-gray-500 mb-2 font-medium">보안그룹</p>
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-1 text-left text-gray-400 font-normal">프로토콜</th>
                          <th className="py-1 text-left text-gray-400 font-normal">출발지</th>
                          <th className="py-1 text-left text-gray-400 font-normal">포트</th>
                          <th className="py-1 text-left text-gray-400 font-normal">설명</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="py-1 text-gray-600">TCP</td>
                          <td className="py-1 text-gray-600 font-mono">0.0.0.0/0</td>
                          <td className="py-1 text-gray-900 font-medium">80</td>
                          <td className="py-1 text-gray-600">HTTP</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-gray-600">TCP</td>
                          <td className="py-1 text-gray-600 font-mono">0.0.0.0/0</td>
                          <td className="py-1 text-gray-900 font-medium">443</td>
                          <td className="py-1 text-gray-600">HTTPS</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-gray-600">TCP</td>
                          <td className="py-1 text-gray-600 font-mono">0.0.0.0/0</td>
                          <td className="py-1 text-gray-900 font-medium">52222</td>
                          <td className="py-1 text-gray-600">SSH</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 align-middle">
                    <p className="font-semibold text-gray-900">GPU Server</p>
                    <p className="text-xs text-gray-400 mt-1">Tesla T4 16GB</p>
                  </td>
                  <td className="px-4 py-4 align-middle">
                    <span className="inline-block px-2 py-0.5 bg-gray-200 text-gray-600 text-xs rounded-full font-medium">Private</span>
                    <p className="text-xs text-gray-400 mt-1 font-mono">10.0.32.0/20</p>
                  </td>
                  <td className="px-4 py-4">
                    <p className="text-xs text-gray-500 mb-2 font-medium">보안그룹</p>
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-1 text-left text-gray-400 font-normal">프로토콜</th>
                          <th className="py-1 text-left text-gray-400 font-normal">출발지</th>
                          <th className="py-1 text-left text-gray-400 font-normal">포트</th>
                          <th className="py-1 text-left text-gray-400 font-normal">설명</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="py-1 text-gray-600">TCP</td>
                          <td className="py-1 text-gray-600 font-mono">10.0.1.117/32</td>
                          <td className="py-1 text-gray-900 font-medium">5432</td>
                          <td className="py-1 text-gray-600">PostgreSQL</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-gray-600">TCP</td>
                          <td className="py-1 text-gray-600 font-mono">10.0.1.117/32</td>
                          <td className="py-1 text-gray-900 font-medium">8001</td>
                          <td className="py-1 text-gray-600">AI Service</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-gray-600">ICMP</td>
                          <td className="py-1 text-gray-600 font-mono">10.0.1.117/32</td>
                          <td className="py-1 text-gray-900 font-medium">ALL</td>
                          <td className="py-1 text-gray-600">Ping</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-gray-600">TCP</td>
                          <td className="py-1 text-gray-600 font-mono">10.0.1.117/32</td>
                          <td className="py-1 text-gray-900 font-medium">22</td>
                          <td className="py-1 text-gray-600">SSH</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-t border-gray-300 mb-16" />

        {/* 문제 해결 1: SSH 브루트포스 */}
        <section className="mb-16">
          <h2 className="text-lg font-bold text-gray-900 mb-6 border-l-4 border-gray-900 pl-3">
            문제 해결 1: SSH 브루트포스 공격 대응
          </h2>

          <div className="mb-8">
            <h3 className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">
                01
              </span>
              <span className="text-base font-bold text-gray-900">
                문제 발생
              </span>
            </h3>
            <p className="text-gray-700 ml-11">
              서버 운영 2주 만에{" "}
              <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm">
                lastb
              </code>
              로<strong> 1,107건</strong> SSH 로그인 실패 기록 발견. 자동화된
              봇의 브루트포스 공격.
            </p>
            <img
              src="/images/project_images/lastb_1.png"
              alt="lastb 명령어 실행 결과"
              className="w-full rounded-lg mt-4"
            />
          </div>

          <div className="my-8">
            <div className="border-t border-dashed border-gray-300"></div>
          </div>

          <div className="mb-8">
            <h3 className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">
                02
              </span>
              <span className="text-base font-bold text-gray-900">
                해결 과정
              </span>
            </h3>
            <div className="space-y-4 text-sm ml-11">
              <div>
                <p className="font-semibold text-gray-900">자동 차단</p>
                <p className="text-gray-500 mt-1">
                  <span className="text-gray-400 mr-2">•</span>fail2ban 도입 -
                  3회 실패 시 IP 자동 차단
                </p>
                <p className="text-xs text-gray-400 ml-4">
                  수동 IP 차단은 비효율적. 로그 기반 자동 차단으로 운영 부담
                  최소화
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">포트 은닉</p>
                <p className="text-gray-500 mt-1">
                  <span className="text-gray-400 mr-2">•</span>SSH 포트 변경 (22
                  → 52222)
                </p>
                <p className="text-xs text-gray-400 ml-4">
                  봇은 기본 포트 22만 스캔. 비표준 포트로 90% 이상 자동 공격
                  회피
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">다층 방어</p>
                <p className="text-gray-500 mt-1">
                  <span className="text-gray-400 mr-2">•</span>Defense in Depth
                  - UFW + 보안그룹 이중 방화벽
                </p>
                <p className="text-xs text-gray-400 ml-4">
                  단일 방화벽 설정 실수 시에도 2차 방어선 유지
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">네트워크 격리</p>
                <p className="text-gray-500 mt-1">
                  <span className="text-gray-400 mr-2">•</span>GPU Server
                  Private Subnet 배치 + Public IP 제거
                </p>
                <p className="text-gray-500 mt-0.5">
                  <span className="text-gray-400 mr-2">•</span>Bastion Host (SSH
                  ProxyJump) 구성
                </p>
                <p className="text-xs text-gray-400 ml-4">
                  DB/AI 모델 보호. App Server 경유만 허용
                </p>
              </div>
            </div>
            <img
              src="/images/project_images/gpu_pri.png"
              alt="보안 아키텍처 변경 전후 비교"
              className="w-full rounded-lg mt-4"
            />
          </div>

          <div className="my-8">
            <div className="border-t border-dashed border-gray-300"></div>
          </div>

          <div>
            <h3 className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">
                03
              </span>
              <span className="text-base font-bold text-gray-900">결과</span>
            </h3>
            <div className="overflow-x-auto mb-4 ml-11">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-2 text-left text-gray-500 font-medium">
                      서버
                    </th>
                    <th className="py-2 text-left text-gray-500 font-medium">
                      대응 전
                    </th>
                    <th className="py-2 text-left text-gray-500 font-medium">
                      대응 후
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-2 text-gray-900">App Server</td>
                    <td className="py-2 text-gray-900">1,107건</td>
                    <td className="py-2 font-bold text-gray-900">
                      침투 0건 (299 IP 차단)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-900">GPU Server</td>
                    <td className="py-2 text-gray-900">205건</td>
                    <td className="py-2 font-bold text-gray-900">
                      공격 시도 0건
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-11">
              <div>
                <img
                  src="/images/project_images/lastb_2.png"
                  alt="GPU Server - Public IP 제거 후"
                  className="w-full rounded-lg mb-1"
                />
                <p className="text-xs text-gray-500">
                  GPU Server - 신규 공격 0건
                </p>
              </div>
              <div>
                <img
                  src="/images/project_images/lastb_3.png"
                  alt="App Server - 52222 탐지됐으나 차단"
                  className="w-full rounded-lg mb-1"
                />
                <p className="text-xs text-gray-500">
                  App Server - 포트 탐지됐으나 침투 차단
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-300 mb-16" />

        {/* 문제 해결 2: 서버 경량화 */}
        <section className="mb-16">
          <h2 className="text-lg font-bold text-gray-900 mb-6 border-l-4 border-gray-900 pl-3">
            문제 해결 2: 서버 경량화 및 자동화
          </h2>

          <div className="mb-8">
            <h3 className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">
                01
              </span>
              <span className="text-base font-bold text-gray-900">
                문제 발생
              </span>
            </h3>
            <p className="text-gray-700 ml-11">
              App Server 스토리지 <strong>10GB SSD</strong>. Docker 이미지
              1.2GB, 시스템 로그 427MB 누적.
            </p>
            <img
              src="/images/project_images/app_df.png"
              alt="App Server 디스크 사용량"
              className="w-full rounded-lg mt-4"
            />
          </div>

          <div className="my-8">
            <div className="border-t border-dashed border-gray-300"></div>
          </div>

          <div className="mb-8">
            <h3 className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">
                02
              </span>
              <span className="text-base font-bold text-gray-900">
                해결 과정
              </span>
            </h3>
            <div className="space-y-4 text-sm ml-11">
              <div>
                <p className="font-semibold text-gray-900">이미지 경량화</p>
                <p className="text-gray-500 mt-1">
                  <span className="text-gray-400 mr-2">•</span>Docker
                  멀티스테이지 빌드
                </p>
                <p className="text-xs text-gray-400 ml-4">
                  빌드 환경(node_modules)과 실행 환경 분리. 최종 이미지에 빌드
                  도구 미포함
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">런타임 제거</p>
                <p className="text-gray-500 mt-1">
                  <span className="text-gray-400 mr-2">•</span>Nginx 정적
                  서빙으로 전환
                </p>
                <p className="text-xs text-gray-400 ml-4">
                  SPA는 빌드 후 정적 파일만 필요. Node 런타임 제거로 리소스 절약
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">자동 정리</p>
                <p className="text-gray-500 mt-1">
                  <span className="text-gray-400 mr-2">•</span>Cron 자동화
                  스크립트 (매주 금요일)
                </p>
                <p className="text-xs text-gray-400 ml-4">
                  수동 정리는 잊기 쉬움. 주간 스케줄로 디스크 풀 사전 예방
                </p>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mt-4">
              <pre className="text-xs text-gray-300 font-mono">
                {`# 매주 금요일 자동 정리
0 17 * * 5 /home/ubuntu/scripts/weekly-cleanup.sh

# journalctl 7일 이전 로그 삭제 + Docker prune`}
              </pre>
            </div>
          </div>

          <div className="my-8">
            <div className="border-t border-dashed border-gray-300"></div>
          </div>

          <div>
            <h3 className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">
                03
              </span>
              <span className="text-base font-bold text-gray-900">결과</span>
            </h3>
            <div className="overflow-x-auto mb-4 ml-11">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-2 text-left text-gray-500 font-medium">
                      항목
                    </th>
                    <th className="py-2 text-left text-gray-500 font-medium">
                      Before
                    </th>
                    <th className="py-2 text-left text-gray-500 font-medium">
                      After
                    </th>
                    <th className="py-2 text-left text-gray-500 font-medium">
                      개선
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-2 text-gray-900">Docker 이미지</td>
                    <td className="py-2 text-gray-900">1.2GB</td>
                    <td className="py-2 text-gray-900">95MB</td>
                    <td className="py-2 font-bold text-gray-900">92% 감소</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-900">시스템 로그</td>
                    <td className="py-2 text-gray-900">427MB</td>
                    <td className="py-2 text-gray-900">16MB</td>
                    <td className="py-2 font-bold text-gray-900">96% 감소</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="ml-11">
              <img
                src="/images/project_images/weekly_1.png"
                alt="Weekly Cleanup 실행 로그"
                className="w-full rounded-lg"
              />
              <p className="text-xs text-gray-500 mt-1">
                freed 0B = 자동화 성공. 주간 정기 실행으로 쌓이기 전에 미리
                정리됨.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-300 mb-16" />

        {/* 문제 해결 3: CI/CD */}
        <section className="mb-16">
          <h2 className="text-lg font-bold text-gray-900 mb-6 border-l-4 border-gray-900 pl-3">
            문제 해결 3: CI/CD 파이프라인 구축
          </h2>

          <div className="mb-8">
            <h3 className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">
                01
              </span>
              <span className="text-base font-bold text-gray-900">
                문제 발생
              </span>
            </h3>
            <p className="text-gray-700 ml-11">
              수동 배포 시 휴먼 에러 발생. GPU 서버가{" "}
              <strong>Private Subnet</strong>이라 GitHub Actions에서 직접 접근
              불가.
            </p>
            <img
              src="/images/project_images/gpu_ci-cd.png"
              alt="GitHub Actions 배포 실패 - Private Subnet 접근 불가"
              className="w-full rounded-lg mt-4"
            />
          </div>

          <div className="my-8">
            <div className="border-t border-dashed border-gray-300"></div>
          </div>

          <div className="mb-8">
            <h3 className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">
                02
              </span>
              <span className="text-base font-bold text-gray-900">
                해결 과정
              </span>
            </h3>
            <div className="space-y-4 text-sm ml-11">
              <div>
                <p className="font-semibold text-gray-900">워크플로우 분리</p>
                <p className="text-gray-500 mt-1">
                  <span className="text-gray-400 mr-2">•</span>Path 기반 트리거
                  (frontend/backend/ai)
                </p>
                <p className="text-xs text-gray-400 ml-4">
                  폴더별 독립 배포. 불필요한 빌드 방지
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Private 서버 배포</p>
                <p className="text-gray-500 mt-1">
                  <span className="text-gray-400 mr-2">•</span>SSH ProxyJump
                  설정
                </p>
                <p className="text-xs text-gray-400 ml-4">
                  App Server를 점프 호스트로 활용. GPU 서버 Public IP 없이 배포
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">시크릿 관리</p>
                <p className="text-gray-500 mt-1">
                  <span className="text-gray-400 mr-2">•</span>GitHub Secrets로
                  환경변수 분리
                </p>
                <p className="text-xs text-gray-400 ml-4">
                  SSH 키, DB 비밀번호 등 민감 정보. 코드에 하드코딩 제거
                </p>
              </div>
            </div>
            <img
              src="/images/project_images/ci-cd.png"
              alt="CI/CD 파이프라인 구조"
              className="w-full rounded-lg mt-4"
            />
          </div>

          <div className="my-8">
            <div className="border-t border-dashed border-gray-300"></div>
          </div>

          <div>
            <h3 className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">
                03
              </span>
              <span className="text-base font-bold text-gray-900">결과</span>
            </h3>
            <div className="space-y-3 ml-11">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-900">
                  deploy-frontend.yml
                </p>
                <p className="text-xs text-gray-500">
                  frontend/** 변경 → npm build → rsync → /var/www/
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-900">
                  deploy-backend.yml
                </p>
                <p className="text-xs text-gray-500">
                  backend/** 변경 → SSH → docker compose up -d --build
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-900">
                  deploy-gpu.yml
                </p>
                <p className="text-xs text-gray-500">
                  ai/** 변경 → SSH (ProxyJump) → GPU 서버 배포
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mt-4 ml-11">
              <strong>dev/main push만으로 자동 배포</strong>. 수동 배포 대비
              배포 시간 단축, 휴먼 에러 제거.
            </p>
            <div className="space-y-4 mt-4 ml-11">
              <div>
                <img
                  src="/images/project_images/ci-cd3.png"
                  alt="Before - 배포 시간 10분대"
                  className="w-full rounded-lg mb-1"
                />
                <p className="text-xs text-gray-500">Before - 10m 49s</p>
              </div>
              <div>
                <img
                  src="/images/project_images/ci-cd2.png"
                  alt="After - 배포 시간 2분 미만"
                  className="w-full rounded-lg mb-1"
                />
                <p className="text-xs text-gray-500">
                  After - 1m 43s (83% 단축)
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-300 mb-16" />

        {/* 문제 해결 4: Nginx SSL 보안 */}
        <section className="mb-16">
          <h2 className="text-lg font-bold text-gray-900 mb-6 border-l-4 border-gray-900 pl-3">
            문제 해결 4: Nginx SSL/HTTPS 보안 설정
          </h2>

          <div className="mb-8">
            <h3 className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">
                01
              </span>
              <span className="text-base font-bold text-gray-900">
                문제 발생
              </span>
            </h3>
            <p className="text-gray-700 ml-11">
              4개 도메인(Landing, Demo, Console, API)을 단일 서버에서 HTTPS로 서빙해야 하는 상황.
              HTTP 평문 통신으로 인한 보안 취약점과, HTTPS 전환 시 SPA 라우팅 404, CORS 중복 헤더 등 복합적인 문제 발생.
            </p>
          </div>

          <div className="my-8">
            <div className="border-t border-dashed border-gray-300"></div>
          </div>

          <div className="mb-8">
            <h3 className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">
                02
              </span>
              <span className="text-base font-bold text-gray-900">
                해결 과정
              </span>
            </h3>
            <div className="space-y-4 text-sm ml-11">
              <div>
                <p className="font-semibold text-gray-900">SSL 인증서</p>
                <p className="text-gray-500 mt-1">
                  <span className="text-gray-400 mr-2">•</span>Let{"'"}s Encrypt 와일드카드 인증서로 4개 도메인 통합 관리
                </p>
                <p className="text-xs text-gray-400 ml-4">
                  도메인별 개별 인증서 대신 와일드카드로 갱신 포인트 단일화. systemd timer 자동 갱신
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">TLS 강화</p>
                <p className="text-gray-500 mt-1">
                  <span className="text-gray-400 mr-2">•</span>TLS 1.2/1.3만 허용, 구버전 프로토콜 차단
                </p>
                <p className="text-xs text-gray-400 ml-4">
                  HSTS max-age 2년 설정으로 브라우저 레벨에서 HTTPS 강제
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">보안 헤더</p>
                <p className="text-gray-500 mt-1">
                  <span className="text-gray-400 mr-2">•</span>X-Content-Type-Options, X-Frame-Options, Referrer-Policy 적용
                </p>
                <p className="text-xs text-gray-400 ml-4">
                  MIME 스니핑, 클릭재킹, 정보 유출 방지. Nginx add_header 상속 이슈 해결
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">리버스 프록시</p>
                <p className="text-gray-500 mt-1">
                  <span className="text-gray-400 mr-2">•</span>도메인별 라우팅 분리 (정적 서빙 + API 프록시)
                </p>
                <p className="text-xs text-gray-400 ml-4">
                  SPA try_files 폴백, 정적 파일 1년 캐시 + index.html no-cache 전략
                </p>
              </div>
            </div>
          </div>

          <div className="my-8">
            <div className="border-t border-dashed border-gray-300"></div>
          </div>

          <div>
            <h3 className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">
                03
              </span>
              <span className="text-base font-bold text-gray-900">
                결과
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-11 mb-4 items-end">
              <div>
                <img
                  src="/images/project_images/ssl_labsA.png"
                  alt="SSL Labs A+ 등급 달성"
                  className="w-full rounded-lg mb-1"
                />
                <p className="text-xs text-gray-500">SSL Labs A+ 등급</p>
              </div>
              <div>
                <img
                  src="/images/project_images/ssl_labsA2.png"
                  alt="SSL Labs 상세 결과"
                  className="w-full rounded-lg mb-1"
                />
                <p className="text-xs text-gray-500">TLS 1.3, HSTS 적용 확인</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-11 mb-4 items-end">
              <div>
                <img
                  src="/images/project_images/landing.png"
                  alt="moviesir.cloud 랜딩 페이지"
                  className="w-full rounded-lg mb-1"
                />
                <p className="text-xs text-gray-500">moviesir.cloud - Landing Page</p>
              </div>
              <div>
                <img
                  src="/images/project_images/demo.png"
                  alt="demo.moviesir.cloud Demo App"
                  className="w-full rounded-lg mb-1"
                />
                <p className="text-xs text-gray-500">demo.moviesir.cloud - Demo App</p>
              </div>
              <div>
                <img
                  src="/images/project_images/console.png"
                  alt="console.moviesir.cloud B2B Console"
                  className="w-full rounded-lg mb-1"
                />
                <p className="text-xs text-gray-500">console.moviesir.cloud - B2B Console</p>
              </div>
              <div>
                <img
                  src="/images/project_images/api.png"
                  alt="api.moviesir.cloud External API"
                  className="w-full rounded-lg mb-1"
                />
                <p className="text-xs text-gray-500">api.moviesir.cloud - External API</p>
              </div>
            </div>
            <div className="overflow-x-auto mb-4 ml-11">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-2 text-left text-gray-500 font-medium">
                      항목
                    </th>
                    <th className="py-2 text-left text-gray-500 font-medium">
                      설정
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-2 text-gray-900">SSL Labs 등급</td>
                    <td className="py-2 font-bold text-gray-900">A+</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-900">TLS 프로토콜</td>
                    <td className="py-2 text-gray-900">1.2 / 1.3</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-900">HSTS</td>
                    <td className="py-2 text-gray-900">max-age=63072000 (2년)</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-900">도메인</td>
                    <td className="py-2 text-gray-900">4개 서브도메인 단일 서버 운영</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-900">인증서 갱신</td>
                    <td className="py-2 text-gray-900">자동 (systemd timer)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-300 mb-16" />

        {/* 회고 */}
        <section className="mb-16">
          <h2 className="text-lg font-bold text-gray-900 mb-4 border-l-4 border-gray-900 pl-3">
            회고
          </h2>
          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <div>
              <p className="font-semibold text-gray-900 mb-2">배운 점</p>
              <div className="space-y-3">
                <div className="flex">
                  <span className="text-gray-400 mr-2 shrink-0">•</span>
                  <p>
                    서버 2대라는 제한된 자원으로 VPC 설계부터 CI/CD 자동화까지
                    프로덕션 수준의 인프라를 직접 구축했다. 제약 조건 안에서
                    최적의 아키텍처를 설계하는 과정에서, 클라우드 인프라는
                    &quot;완성&quot;이 아니라 &quot;운영하며 개선하는 것&quot;이라는 걸 체감했다.
                  </p>
                </div>
                <div className="flex">
                  <span className="text-gray-400 mr-2 shrink-0">•</span>
                  <p>
                    SSH 브루트포스 5,227건을 탐지하고 단계적으로 대응하면서,
                    보안은 한 번의 설정이 아니라 계층별로 쌓아야 한다는 걸 배웠다.
                    fail2ban → 포트 변경 → 이중 방화벽 → Private Subnet 격리까지
                    Defense in Depth 전략을 실전에서 경험했다.
                  </p>
                </div>
                <div className="flex">
                  <span className="text-gray-400 mr-2 shrink-0">•</span>
                  <p>
                    Cron 자동화와 SSL 설정을 직접 하면서, 수동 작업을 반복하기보다
                    자동화 스크립트로 만드는 습관이 운영 안정성에 직결된다는 걸 느꼈다.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">개선하고 싶은 점</p>
              <div className="space-y-3">
                <div className="flex">
                  <span className="text-gray-400 mr-2 shrink-0">•</span>
                  <p>
                    현재 서버 상태를 수동으로 확인하고 있는데,
                    Prometheus + Grafana 기반 모니터링을 도입하여
                    CPU, 메모리, 디스크 사용량을 시각화하고 임계치 알림을 자동화하고 싶다.
                  </p>
                </div>
                <div className="flex">
                  <span className="text-gray-400 mr-2 shrink-0">•</span>
                  <p>
                    Docker Compose 기반 배포를 Kubernetes로 전환하여
                    오토스케일링과 무중단 배포를 경험해보고 싶다.
                  </p>
                </div>
                <div className="flex">
                  <span className="text-gray-400 mr-2 shrink-0">•</span>
                  <p>
                    Terraform으로 현재 수동 구성한 카카오클라우드 인프라를
                    코드로 관리(IaC)하여, 환경 재현성과 변경 이력 추적을 개선하고 싶다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-300 mb-16" />

        {/* 관련 글 */}
        <section className="mb-16">
          <h2 className="text-lg font-bold text-gray-900 mb-4 border-l-4 border-gray-900 pl-3">
            관련 글
          </h2>
          <div className="space-y-2 text-sm">
            <p>
              <span className="text-gray-400 mr-2">•</span>
              <Link
                href="https://velog.io/@leelaeloo/클라우드-인프라-구축기-1"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 hover:underline transition-colors"
              >
                #1 카카오클라우드 2-Tier 아키텍처 설계
              </Link>
            </p>
            <p>
              <span className="text-gray-400 mr-2">•</span>
              <Link
                href="https://velog.io/@leelaeloo/클라우드-인프라-구축기-2"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 hover:underline transition-colors"
              >
                #2 GitHub Actions CI/CD 파이프라인 구축
              </Link>
            </p>
            <p>
              <span className="text-gray-400 mr-2">•</span>
              <Link
                href="https://velog.io/@leelaeloo/클라우드-인프라-구축기-3"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 hover:underline transition-colors"
              >
                #3 SSH 브루트포스 5,227건 대응기
              </Link>
            </p>
            <p>
              <span className="text-gray-400 mr-2">•</span>
              <Link
                href="https://velog.io/@leelaeloo/클라우드-인프라-구축기-4"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 hover:underline transition-colors"
              >
                #4 Nginx로 SSL Labs A+ 달성하기
              </Link>
            </p>
            <p>
              <span className="text-gray-400 mr-2">•</span>
              <Link
                href="https://velog.io/@leelaeloo/클라우드-인프라-구축기-5"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 hover:underline transition-colors"
              >
                #5 서버 자동화 스크립트로 운영 효율화
              </Link>
            </p>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-start items-center pt-8 border-t border-gray-200">
          <Link
            href="/projects"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors group"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>모든 프로젝트</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
